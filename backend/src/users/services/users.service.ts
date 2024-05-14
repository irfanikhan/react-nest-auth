import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

// Dto
import { CreateUserDto } from 'shared/dtos/create-user.dto';

// Schemas
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });

    return createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<UserDocument> {
    const user = await this.userModel.findById(id).exec();

    if (!user) throw new NotFoundException('User with given Id was not found');

    return user;
  }

  findByEmail(email: string): Promise<UserDocument> {
    return this.userModel.findOne({ email }).exec();
  }

  validatePassword(user: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }

  // async update(
  //   id: string,
  //   updateUserDto: UpdateUserDto,
  // ): Promise<UserDocument> {
  //   return this.userModel
  //     .findByIdAndUpdate(id, updateUserDto, { new: true })
  //     .exec();
  // }

  // async remove(id: string): Promise<UserDocument> {
  //   return this.userModel.findByIdAndDelete(id).exec();
  // }
}

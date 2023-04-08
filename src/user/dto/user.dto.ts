import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsPhoneNumber, Length, Matches } from 'class-validator'

export class UserDto {
  /**手机号码 */
  @ApiProperty({
    example: 15173098922
  })
  // @IsPhoneNumber('CH')
  phoneNumber: number

  /**密码 */
  @ApiProperty({
    example: '123456'
  })
  @IsNotEmpty()
  @Length(6, 10)
  password: string

  /**用户名 */
  @ApiProperty({
    example: 'qile'
  })
  name: string

  /**邮箱 */
  @ApiProperty({
    example: 'qile@gmail.com'
  })
  @IsEmail()
  email: string
}
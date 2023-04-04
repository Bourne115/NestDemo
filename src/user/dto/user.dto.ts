import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsPhoneNumber, Length, Matches } from 'class-validator'

export class CreateUserDto {
  /**手机号码 */
  @ApiProperty({
    example: 123456789
  })
  // @IsPhoneNumber('CH')
  @Matches(/^1\d{10}$/g, { message: '请输入正确的手机号'})
  phoneNumber: number

  /**密码 */
  @ApiProperty({
    example: 'frank'
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
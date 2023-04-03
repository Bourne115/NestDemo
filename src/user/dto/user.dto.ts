import { ApiProperty } from "@nestjs/swagger"
import { Matches } from 'class-validator'

export class CreateUserDto {
  /**手机号码 */
  @ApiProperty({
    example: 123456789
  })
  @Matches(/^1\d{10}$/g, { message: '请输入正确的手机号'})
  phoneNumber: number

  @ApiProperty({
    example: 'frank'
  })
  /**密码 */
  password: string

  @ApiProperty({
    example: 'qile'
  })
  /**名字 */
  name: string
}
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto/payment_session.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession( @Body() paymentSessionDto: PaymentSessionDto){
    //return paymentSessionDto;
    return this.paymentsService.createPaymentSession( paymentSessionDto );
    
  }

  @Get('success')
  success(){
    return {
      ok: true,
      msg: 'Payment successful'
    }
  }

  @Get('cancel')
  cancel(){
    return {
      ok: false,
      msg: 'Payment cancel'
    }
  }

  @Post('webhook')
  async stripeWebhook(){
    return 'stripeWebhook';
  }
}

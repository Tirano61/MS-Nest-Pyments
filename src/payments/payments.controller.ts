import { Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession(){
    return this.paymentsService.createPaymentSession();
    
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

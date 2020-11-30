import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';



@Injectable()
export class MessagesService {

  constructor() { }

  success(message: string) {

    Swal.fire({
      icon: 'success',
      title: `${message}`
    });
  }

  error(title: string, message: string, error) {
    Swal.fire({
      icon: 'error',
      title: `${title}`,
      text: `${message}`
    });
  }

  errorSession(message: string, error) {
    let detalhe1: string = (error.objmessage == null || error.objmessage === undefined) ? "" : error.objmessage.message;
    // swal({
    //   type: 'error',
    //   html: `<span style='color:#DFDFDF;font-weight: 400;'>${message}</span>
    //           </br>
    //         <span style='color:#AFAFAF;font-weight: 400;font-size: 12px; align-text:left;'>${detalhe1}</span>`,
    //   width: '100%',
    //   animation: false,
    //   toast: true,
    //   background: '#6d2e2e',
    //   showCancelButton: false,
    //   showConfirmButton: true,
    //   confirmButtonColor: '#bd2130',
    //   position: 'top-end',
    //   timer: 5000,
    // });
  }

  info(message: any) {

    // return swal({
    //   title: message,
    //   type: 'info',
    //   position: 'center',
    //   showCancelButton: false,
    //   showConfirmButton: true,
    //   showCloseButton: true,
    //   confirmButtonColor: '#0078b0',
    // });

  }

  infoFormated(message: any) {

    // return swal({
    //   title: message,
    //   type: 'success',
    //   position: 'center',
    //   showCancelButton: false,
    //   showConfirmButton: true,
    //   showCloseButton: true,
    //   confirmButtonText: 'OK',
    //   confirmButtonColor: '#0078b0',
    // });

  }

  warning(message: any) {

    // return swal({
    //   html:
    //     `<span style="font-size: 14px; color: #ffffff"><b>${message}</b></span>`,
    //   title: message,
    //   type: 'warning',
    //   position: 'center',
    //   showCancelButton: false,
    //   showConfirmButton: true,
    //   showCloseButton: true,
    //   confirmButtonText: 'OK',
    //   confirmButtonColor: '#bd2130',
    //   timer: 4000,
    // });

  }

  warningFormated(message: any) {

    // return swal({
    //   html:
    //     `<span style="font-size: 25px; color: black"><b>${message}</b></span>`,
    //   text: message,
    //   type: 'warning',
    //   position: 'center',
    //   showCancelButton: false,
    //   showConfirmButton: true,
    //   showCloseButton: true,
    //   confirmButtonText: 'OK',
    //   confirmButtonColor: '#0078b0',
    // });
  }

  delete(message: any) {
    // return swal({
    //   title: 'Você deseja excluir esse item?',
    //   text: "Essa função não pode ser desfeita.",
    //   type: 'warning',
    //   position: 'center',
    //   showCancelButton: true,
    //   showConfirmButton: true,
    //   showCloseButton: true,
    //   confirmButtonText: 'OK',
    //   cancelButtonText: 'Cancelar',
    //   confirmButtonColor: '#bd2130',
    //   cancelButtonColor: '#bd2130'
    // }).then((result) => {
    //   if (result.value) {
    //     swal(
    //       'Excluido',
    //       'Esse item foi excluído.',
    //       'success'
    //     );
    //   }
    // });
  }

  infoActionButton(message: any) {

    // return swal({
    //   title: message,
    //   type: 'info',
    //   position: 'center',
    //   showCancelButton: false,
    //   showConfirmButton: true,
    //   showCloseButton: true,
    //   confirmButtonColor: '#0078b0',
    //
    // }).then((value) => {
    //   if (value) {
    //     window.location.reload();
    //   }
    // });

  }

  createLoading(message: any) {

    // return swal({
    //   html:
    //     `<span style="font-size: 14px; color: #ffffff">${message}</span>`,
    //   title: message,
    //   imageUrl: './assets/img/spinner.gif',
    //   imageWidth: 50,
    //   imageHeight: 50,
    //   imageAlt: 'Custom image',
    //   animation: true,
    //   showConfirmButton: false,
    //   backdrop: false
    // });

  }

}

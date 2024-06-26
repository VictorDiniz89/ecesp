const mailTemplateEngine = require('./mailTemplate');

class mailtemplateInscricao extends mailTemplateEngine {
    parseTemplate(params){
        const {nome, curso} = params;
        return `
        <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="und" style="font-family:arial, 'helvetica neue', helvetica, sans-serif"><head><meta http-equiv="Content-Security-Policy" content="script-src 'none'; connect-src 'none'; object-src 'none'; form-action 'none';">
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>ECESP-Online</title><!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]--><!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
    <link rel="shortcut icon" type="image/png" href="https://stripo.email/assets/img/favicon.png">
    <style type="text/css">
  #outlook a {
      padding:0;
  }
  .es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
  }
  .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
  }
  @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px!important; text-align:center!important } h2 { font-size:24px!important; text-align:center!important } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:center!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:center!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
  @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
  </style>
   <style>*{scrollbar-width: thin;scrollbar-color: #888 #f6f6f6;}/* Chrome, Edge, Safari */::-webkit-scrollbar {width: 10px;height: 10px;}::-webkit-scrollbar-track {background: #f6f6f6;}::-webkit-scrollbar-thumb {background: #888;border-radius: 6px;border: 2px solid #f6f6f6;}::-webkit-scrollbar-thumb:hover {box-shadow: inset 0 0 6px rgba(0,0,0,0.3);}textarea::-webkit-scrollbar-track {margin: 15px;}</style><base href="#"></head>
   <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div dir="ltr" class="es-wrapper-color" lang="und" style="background-color:#EFEFEF"><!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                  <v:fill type="tile" color="#efefef"></v:fill>
              </v:background>
          <![endif]-->
     <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EFEFEF">
       <tbody><tr>
        <td valign="top" style="padding:0;Margin:0">
         <table cellpadding="0" cellspacing="0" class="es-header" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
           <tbody><tr>
            <td align="center" style="padding:0;Margin:0">
             <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
               <tbody><tr>
                <td class="esdev-adapt-off" align="left" style="padding:20px;Margin:0">
                 <table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                   <tbody><tr>
                    <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                       <tbody><tr class="es-mobile-hidden">
                        <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:174px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tbody><tr>
                            <td align="center" height="40" style="padding:0;Margin:0"></td>
                           </tr>
                         </tbody></table></td>
                       </tr>
                     </tbody></table></td>
                    <td class="es-mobile-hidden" style="padding:0;Margin:0;width:20px"></td>
                    <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                       <tbody><tr>
                        <td align="left" style="padding:0;Margin:0;width:173px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tbody><tr>
                            <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#45818E;font-size:14px"><img src="https://tlr.stripocdn.email/content/guids/CABINET_0195f30bd02229498c05816ea5ee19208619e8bd3a42b143abdce91ea95d3997/images/group_386.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="45" title="Logo"></a></td>
                           </tr>
                         </tbody></table></td>
                       </tr>
                     </tbody></table></td>
                    <td style="padding:0;Margin:0;width:20px"></td>
                    <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                       <tbody><tr>
                        <td align="left" style="padding:0;Margin:0;width:173px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tbody><tr>
                            <td align="right" style="padding:0;Margin:0;padding-top:5px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                  style="height:39px; v-text-anchor:middle; width:113px" arcsize="50%" strokecolor="#e06666" strokeweight="1px" fillcolor="#efefef">
          <w:anchorlock></w:anchorlock>
          <center style='color:#e06666; font-family:roboto, "helvetica neue", helvetica, arial, sans-serif; font-size:14px; font-weight:700; line-height:14px;  mso-text-raise:1px'>LOG IN</center>
      </v:roundrect></a>
  <![endif]--><!--[if !mso] span class="msohide es-button-border" style="border-style:solid;border-color:#e06666;background:#efefef;border-width:1px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button es-button-1682959317165" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#e06666;font-size:16px;display:inline-block;background:#efefef;border-radius:30px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-weight:bold;font-style:normal;line-height:19px;width:auto;text-align:center;padding:10px 30px;mso-padding-alt:0;mso-border-alt:10px solid  #efefef">LOG IN</a></span><!--<![endif]--></td>
                           </tr>
                         </tbody></table></td>
                       </tr>
                     </tbody></table></td>
                   </tr>
                 </tbody></table></td>
               </tr>
             </tbody></table></td>
           </tr>
         </tbody></table>
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
           <tbody><tr>
            <td align="center" style="padding:0;Margin:0">
             <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none">
               <tbody><tr>
                <td align="left" style="padding:0;Margin:0">
                 <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tbody><tr>
                    <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:600px">
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tbody><tr>
                        <td align="center" style="padding:0;Margin:0;position:relative"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#45818E;font-size:18px"><img class="adapt-img" src="https://tlr.stripocdn.email/content/guids/bannerImgGuid/images/image16829588660091069.png" alt="Trial Ending" title="Trial Ending" width="100%" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                       </tr>
                     </tbody></table></td>
                   </tr>
                 </tbody></table></td>
               </tr>
             </tbody></table></td>
           </tr>
         </tbody></table>
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
           <tbody><tr>
            <td align="center" style="padding:0;Margin:0">
             <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
               <tbody><tr>
                <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tbody><tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tbody><tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><h1 style="Margin:0;line-height:55px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:46px;font-style:normal;font-weight:bold;color:#134F5C">Confirmação de Inscrição</h1></td>
                       </tr>
                       <tr>
                        <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#45818E;font-size:18px">Olá, ${nome}</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#45818E;font-size:18px"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#45818E;font-size:18px">Obrigado pelo interesse em participar da nossa escola online.

                            Esperamos que a ECESP possa te ajudar a conhecer mais a Deus e a sua vontade para sua vida.
                            
                            Por favor, não hesite em entrar em contato com nossa equipe de suporte se surgir alguma dúvida.
                            
                            Tenha um ótimo começo!
                            
                            </p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#45818E;font-size:18px"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#45818E;font-size:18px">Para confirmação da sua matricula no curso ${curso} certifique-se de seguir os seguintes passos:</p>
                         <ol>
                          <li style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;Margin-bottom:15px;margin-left:0;color:#45818E;font-size:18px">Entra no grupo do <strong>WhatsApp </strong></li>
                          <li style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;Margin-bottom:15px;margin-left:0;color:#45818E;font-size:18px">Faça o pagamento via <strong>"Pix"</strong></li>
                          <li style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;Margin-bottom:15px;margin-left:0;color:#45818E;font-size:18px">Esteja com o material de acesso em mãos <strong>(livros, apostilas)</strong> </li>
                          <li style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;Margin-bottom:15px;margin-left:0;color:#45818E;font-size:18px">Aproveite ao <strong>máximo</strong> cada aula</li>
                         </ol></td>
                       </tr>
                       <tr>
                        <td align="center" style="padding:0;Margin:0"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                  style="height:51px; v-text-anchor:middle; width:190px" arcsize="50%" stroke="f"  fillcolor="#e06666">
          <w:anchorlock></w:anchorlock>
          <center style='color:#ffffff; font-family:roboto, "helvetica neue", helvetica, arial, sans-serif; font-size:18px; font-weight:700; line-height:18px;  mso-text-raise:1px'>TRY PREMIUM</center>
      </v:roundrect></a>
  <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#2CB543;background:#E06666;border-width:0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a href="https://wa.me/+5573999652353" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;display:inline-block;background:#E06666;border-radius:30px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-weight:bold;font-style:normal;line-height:22px;width:auto;text-align:center;padding:15px 35px 15px 35px;mso-padding-alt:0;mso-border-alt:10px solid #E06666">CLIQUE AQUI</a></span><!--<![endif]--></td>
                       </tr>
                     </tbody></table></td>
                   </tr>
                 </tbody></table></td>
               </tr>
             </tbody></table></td>
           </tr>
         </tbody></table>
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
           <tbody><tr>
            <td align="center" style="padding:0;Margin:0">
             <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
               <tbody><tr>
                <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tbody><tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tbody><tr>
                        <td align="center" height="35" style="padding:0;Margin:0"></td>
                       </tr>
                     </tbody></table></td>
                   </tr>
                 </tbody></table></td>
               </tr>
             </tbody></table></td>
           </tr>
         </tbody></table>
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
           <tbody><tr>
            <td align="center" style="padding:0;Margin:0">
             <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
               <tbody><tr>
                <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tbody><tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tbody><tr>
                        <td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#134F5C">Alguma dúvida?</h2></td>
                       </tr>
                       <tr>
                        <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#45818E;font-size:18px"><span style="font-size:16px">Em caso de dúvida entre em contato com a secretaria da ECESP-Online  <strong><a href="mailto:support@saascompany.com" target="_new" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#45818E;font-size:16px">ecespcentraltx@outlook.com</a></strong> ou ligue <strong><a target="_blank" href="tel:1-800-123-4567." style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#45818E;font-size:16px">73 3011-7525</a></strong></span></p></td>
                       </tr>
                     </tbody></table></td>
                   </tr>
                 </tbody></table></td>
               </tr>
             </tbody></table></td>
           </tr>
         </tbody></table>
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
           <tbody><tr>
            <td align="center" style="padding:0;Margin:0">
             <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
               <tbody><tr>
                <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tbody><tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tbody><tr>
                        <td align="center" height="35" style="padding:0;Margin:0"></td>
                       </tr>
                     </tbody></table></td>
                   </tr>
                 </tbody></table></td>
               </tr>
             </tbody></table></td>
           </tr>
         </tbody></table>
         <!-- <table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
           <tbody><tr>
            <td align="center" style="padding:0;Margin:0">
             <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
               <tbody><tr>
                <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tbody><tr>
                    <td align="left" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tbody><tr>
                        <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:15px;font-size:0px"><img src="https://tlr.stripocdn.email/content/guids/CABINET_0195f30bd02229498c05816ea5ee19208619e8bd3a42b143abdce91ea95d3997/images/group_386.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;font-size:12px" width="50" title="Logo"></td>
                       </tr>
                       <tr>
                        <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px;font-size:0">
                         <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tbody><tr>
                            <td align="center" valign="top" style="padding:0;Margin:0;padding-right:5px"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Tw" title="Twitter" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                            <td align="center" valign="top" style="padding:0;Margin:0;padding-right:5px"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" title="Facebook" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                            <td align="center" valign="top" style="padding:0;Margin:0"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/linkedin-logo-black.png" alt="In" title="Linkedin" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                           </tr>
                         </tbody></table></td>
                       </tr>
                       <tr>
                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#45818E;font-size:13px"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#45818E;font-size:14px" href=""></a><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#45818E;font-size:14px" href="">Privacy Policy</a><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#45818E;font-size:13px" href=""></a> • <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#45818E;font-size:14px" href="">Unsubscribe</a></p></td>
                       </tr>
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-top:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#45818E;font-size:14px"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#45818E;font-size:14px" href=""></a>Copyright ©2023&nbsp;SAAS Company<a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#45818E;font-size:14px" href=""></a></p></td>
                       </tr>
                     </tbody></table></td>
                   </tr>
                 </tbody></table></td>
               </tr>
             </tbody></table></td>
           </tr>
         </tbody></table> -->
         <!-- <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
           <tbody><tr>
            <td align="center" style="padding:0;Margin:0">
             <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
               <tbody><tr>
                <td align="left" style="padding:20px;Margin:0">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tbody><tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tbody><tr>
                        <td align="center" class="es-infoblock made_with" style="padding:0;Margin:0;line-height:14px;font-size:0;color:#CCCCCC"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&amp;utm_medium=email&amp;utm_campaign=saas_5&amp;utm_content=trial_ending_reminder" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://tlr.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt="" width="125" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                       </tr>
                     </tbody></table></td>
                   </tr>
                 </tbody></table></td>
               </tr>
             </tbody></table></td>
           </tr>
         </tbody></table></td>
       </tr>
     </tbody></table> -->
    </div>
   
  </body></html>
        `
    }
}

const mailTemplate = new mailtemplateInscricao();

module.exports = mailTemplate;

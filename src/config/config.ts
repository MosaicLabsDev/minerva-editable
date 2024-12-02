import { Config } from "../types/interfaces";

export const WEB_CONFIG = {
   "branding": {
      "logo": "https://forvet.org/static/media/forvet_logo.888beb8dce69f774ef126801401a1a95.svg",
      "institutionalName": "FORVET",
      "campusUrl": "https://campus.forvet.org/",
      "webUrl": "https://forvet.org/"
   },
   "colors": {
      "primary": {
         "lightest": "#477283",
         "light": "#3D6271",
         "main": "#355562",
         "dark": "#2c4b58",
         "darkest": "#243D48"
      },
      "secondary": {
         "light": "#A3D2EA",
         "main": "#77BDE0",
         "dark": "#43A4D4"
      },
      "tertiary": {
         "main": "#DF3576"
      },
      "text": {
         "primary": "#FFF",
         "secondary": "#000",
         "tertiary": "#bdbdbd",
         "shadowText": "#FFF"
      },
      "common": {
         "white": "#FFF",
         "black": "#212121",
         "blackTransparent": "rgba(0,0,0,0.5)",
         "red": {
            "main": "#DC3D3D",
            "light": "#d96e6e"
         },
         "yellow": "#FFCB47",
         "mantineError": "#c55c5c"
      }
   },
   "typography": {
      "fontFamily": "'Montserrat', sans-serif",
      "fontWeights": [300, 500, 700],
      "fontSizes": {
         "h1": "64px",
         "h2": "40px",
         "h3": "24px",
         "h4": "20px",
         "h5": "18px",
         "h6": "16px",
         "body": "18px",
         "small": "16px",
         "tiny": "12px"
      }
   },
   "borderRadius": {
      "large": "1.5rem",
      "medium": "1rem",
      "small": "0.8rem"
   },
   "paddings": {
      "layoutPaddingX": "48px",
      "layoutPaddingY": "32px",
      "px": "80px",
      "py": "60px",
      "mt": "20px",
      "mb": "20px"
   },
   "boxShadows": {
      "boxShadow": "0px 6px 16px 0px #0000000F",
      "boxShadowMd": "1px 1px 4px #000000b6",
      "boxShadowStrong": "0px 0px 6px #00000063"
   },
   "features": {
      "subscriptionLevel": 1,
      "appRoutes": {
         "inicio": [
            true,
            true,
            true
         ],
         "aboutUsPage": [
            false,
            true,
            true
         ],
         "contact": [
            false,
            true,
            true
         ],
         "specialties": [
            true,
            true,
            true
         ],
         "courseDetails": [
            true,
            true,
            true
         ],
         "coursesPage": [
            true,
            true,
            true
         ],
         "paymentCheckout": [
            true,
            true,
            true
         ],
         "coursePaymentPage": [
            true,
            true,
            true
         ],
         "preguntasFrecuentes": [
            true,
            true,
            true
         ],
         "transferBankPage": [
            true,
            true,
            true
         ],
         "error404Page": [
            true,
            true,
            true
         ],
         "registry": [
            true,
            true,
            true
         ],
         "admin": [
            true,
            true,
            true
         ]
      },
      "pages": {
         "inicio": {
            "showAboutUsContainer": true,
            "showAvalContainer": true,
            "showLandingHero": true,
            "showContactBanner": true,
            "showTestimonialGrid": true,
            "showSpecialtiesCarousel": true,
            "showNewsCarousel": true,
            "showTeamContainer": true,
            "showSponsorSection": true,
            "showDecorativeCircle": true,
            "showTinyDecorativeCircle": true
         },
         "aboutUsPage": {
            "showAboutUsHero": true,
            "showVideoPlayerSection": true,
            "showMissionSection": true,
            "showPhilosophySection": true,
            "showVisionSection": true,
            "showValuesSection": true
         },
         "contact": {
            "showContactForm": true,
            "showMap": true
         },
         "specialties": {
            "showSpecialtyList": true,
            "showSpecialtyDetails": true
         },
         "courseDetails": {
            "showCourseOverview": true,
            "showCourseSchedule": true,
            "showCourseInstructors": true,
            "showCourseMaterials": true
         },
         "coursesPage": {
            "showAllCourses": true,
            "showCourseCategories": true
         },
         "paymentCheckout": {
            "showPaymentForm": true,
            "showOrderSummary": true
         },
         "coursePaymentPage": {
            "showPaymentOptions": true,
            "showPaymentConfirmation": true
         },
         "preguntasFrecuentes": {
            "showFAQList": true,
            "showFAQSearch": true
         },
         "transferBankPage": {
            "showBankTransferForm": true,
            "showTransferInstructions": true
         },
         "error404Page": {
            "showErrorMessage": true,
            "showHomePageLink": true
         },
         "registry": {
            "showRegistrationForm": true,
            "showRegistrationConfirmation": true
         },
         "admin": {
            "showDashboard": true,
            "showUserManagement": true,
            "showContentManagement": true
         }
      }
   },
   "media": {
      "inicio": {
         "hero": {
            "leftImage": "https://forvet.org/static/media/hero1.23c30c4f4b987f385bac.png",
            "rightImage": "https://forvet.org/static/media/hero2.91308d8df7a9f8184fcd.png"
         },
         "aboutUs": {
            "firstImage": "https://forvet.org/static/media/aboutUs_1.b82232cd28834ce46109.png",
            "secondImage": "https://forvet.org/static/media/aboutUs_2.0526118734abee4338c3.png"
         },
         "contactBannerImage": "https://forvet.org/static/media/contactbannerlanding.678a9b74bcf4b2be8ba0.png",
         "footerBottomImage": "https://forvet.org/static/media/cat_bg-removebg-preview.7223d009ec136f028b0a.png"
      },
      "institutional": {
         "heroImage": "https://forvet.org/static/media/vet_catImg.d9fa7c3edda198fb2e2a.png",
         "institutionalVideo": "https://forvet-main.s3.sa-east-1.amazonaws.com/public/videos/institutional_web.mp4",
         "institutionalPoster": "https://forvet-main.s3.sa-east-1.amazonaws.com/public/videos/institutional_web_poster.png",
         "missionBannerImage": "https://forvet.org/static/media/vet_dogImg_shape.dd7dd63684d8e012ddbd.png",
         "visionBannerImage": "https://forvet.org/static/media/vet_dog2.dafe743e51d61218c095.png",
         "philosophyBannerImage": "https://forvet.org/static/media/vet_catImg2.b2d0b00054211b2ec35b.png"
      },
      "courses": {
         "heroImage":"https://i.imgur.com/nDLxd7p.png"
      }
   },
   "texts": {
      "inicio": {
         "landingHero": {
            "title": "DONDE EXPERTOS FORMAN Y ",
            "typeWriterWords": [
               "COMPARTEN",
               "CONSTRUYEN",
               "COLABORAN",
               "TRANSFORMAN"
            ],
            "subtitle": "Potenciá tus conocimientos y habilidades bajo la mentoría de expertos reconocidos internacionalmente para marcar la diferencia en la comunidad veterinaria. Juntos, redefiniendo el futuro de la profesión.",
            "buttonText": "EXPLORA NUESTROS CURSOS"
         },
         "avalsContainer": {
            "title": "NOS APOYAN"
         },
         "newsCarousel": {
            "title": "NOVEDADES",
            "subtitleTag": "OFERTA ACADÉMICA"
         },
         "specialtiesCarousel": {
            "title": "NUESTRAS ESPECIALIDADES",
            "subtitleTag": "OFERTA ACADÉMICA",
            "buttonText": "Explorar Cursos"
         },
         "sponsorSection": {
            "title": "NUESTROS VALIOSOS COLABORADORES",
            "subtitleTag": "Sponsor del mes",
            "subtitle": "En FORVET, valoramos enormemente la colaboración y el apoyo de nuestros socios y sponsors. Gracias a su compromiso con la excelencia en la Medicina Veterinaria, podemos ofrecer recursos, oportunidades y espacios de aprendizaje excepcionales a nuestros miembros de la comunidad.",
            "buttonText": "Ver más"
         },
         "aboutUsContainer": {
            "title": "Una comunidad de profesionales especialistas",
            "subtitle": "FORVET es una comunidad apasionada de expertos veterinarios que comparten su vasta experiencia para formar especialistas de la más alta calidad. Donde el aprendizaje surge de la colaboración de una red internacional de colegas comprometidos con la redefinición del estándar de la profesión veterinaria.",
            "subtitleTag": "sobre nosotros",
            "firstImage": "",
            "secondImage": ""
         },
         "teamContainer": {
            "title": "EQUIPO",
            "subtitle": "En FORVET, nuestro mayor activo es nuestra comunidad de expertos apasionados y comprometidos. Conformamos un equipo diverso y talentoso de profesionales veterinarios dedicados a elevar la profesión y compartir nuestro Contenido 4 conocimiento con la comunidad.",
            "secondSubtitle": "Juntos, formamos una red internacional de colegas que persiguen la excelencia en la Medicina Veterinaria.",
            "directors": "DIRECTORES",
            "staff": "STAFF FORVET",
            "professorStaff": "PROFESORES"
         },
         "testimonialGrid": {
            "title": "Nuestros Alumnos Dicen",
            "subtitleTag": "testimonios"
         },
         "contactBanner": {
            "title": "¿Quieres conocer más sobre nuestra propuesta?",
            "subtitleTag": "Contacto",
            "buttonTitle": "Contáctanos",
            "contactBannerImage": ""
         }
      },
      "header": {
         "inicio": {
            "text": "Inicio",
            "redirectTo": "/"
         },
         "institucional": {
            "text": "Institucional",
            "redirectTo": "/institucional"
         },
         "ofertaAcademica": {
            "text": "Oferta académica",
            "redirectTo": "/cursos"
         },
         "contacto": {
            "text": "Contacto",
            "redirectTo": "/contacto"
         },
         "campus": {
            "text": "CAMPUS",
            "redirectTo": "/campus"
         },
         "megaMenu": {
            "mainButton": {
               "text": "VER OFERTA ACADÉMICA COMPLETA",
               "redirectTo": "/cursos"
            },
            "tabsScheme": {
               "openSource": {
                  "show": true,
                  "title": "Clases abiertas",
                  "description": "Aprovechá que estas clases están abiertas y registrate",
                  "redirectTo": "/cursos"
               },
               "academicUnitsTypes": {
                  "show": true,
                  "title": "Unidades Académicas",
                  "description": "Fijate las opciones que tenemos para vos",
                  "redirectTo": "/cursos"
               },
               "specialtiesInfo": {
                  "show": true,
                  "title": "Especialidades",
                  "description": "Mirá todas las ramas que abarcamos",
                  "redirectTo": "/especializaciones"
               }
            }
         }
      },
      "footer": {
         "heading": {
            "show": true,
            "title": "Sé parte de la revolución educativa veterinaria global.",
            "subtitle": "Sé parte de la comunidad FORVET."
         },
         "content": {
            "logoContainer": {
               "show": true,
               "logo_path": "https://forvet.org/static/media/forvet_logo_footer.71a677a0815fad5b81c8.png",
               "buttonContact": {
                  "text": "CONTACTO",
                  "redirectTo": "/contacto"
               }
            },
            "contactContainer": {
               "show": true,
               "title": "Contacto y Ayuda",
               "items": [
                  {
                     "text": "+54 9 351 208 6545",
                     "icon": "whatsapp",
                     "redirectTo": "https://wa.me/+5493512086545?text=¡Hola!%20Buenos%20días,%20tengo%20una%20consulta...",
                     "target": "_blank"
                  },
                  {
                     "text": "Administración",
                     "icon": "mail",
                     "redirectTo": "mailto:administracion@forvet.org?subject=${encodeURIComponent('Consulta')}",
                     "target": "_blank"
                  },
                  {
                     "text": "Dirección Académica",
                     "icon": "mail",
                     "redirectTo": "mailto:direccion_academica@forvet.org?subject=${encodeURIComponent('Consulta')}",
                     "target": "_blank"
                  },
                  {
                     "text": "Comercial",
                     "icon": "mail",
                     "redirectTo": "mailto:ventas@forvet.org?subject=${encodeURIComponent('Consulta')}&body=${encodeURIComponent('Hola, me gustaría recibir información sobre su oferta académica.')}",
                     "target": "_blank"
                  },
                  {
                     "text": "Preguntas Frecuentes",
                     "icon": "question",
                     "redirectTo": "/preguntas-frecuentes",
                     "target": null
                  }
               ]
            },
            "socialMediaContainer": {
               "show": true,
               "title": "Nuestras redes",
               "items": [
                  {
                     "text": "Forvetargentina",
                     "icon": "instagram",
                     "redirectTo": "https://www.instagram.com/forvetargentina/",
                     "target": "_blank"
                  },
                  {
                     "text": "Forvetargentina",
                     "icon": "facebook",
                     "redirectTo": "https://www.facebook.com/forvetargentina/",
                     "target": "_blank"
                  }
               ]
            }
         }
      },
      "aboutUs": {
         "aboutUsHero": {
            "title": "SOBRE NOSOTROS",
            "heroDescription": "Somos una comunidad apasionada de expertos veterinarios que comparten su vasta experiencia para formar especialistas de alta calidad, donde el aprendizaje surge de la colaboración.",
            "aboutUsImage": ""
         },
         "videoPlayerSection": {
            "counts": [
               {
                  "id": "001",
                  "label": "Cursos Dictados",
                  "number": "+200",
                  "duration": "3"
               },
               {
                  "id": "002",
                  "label": "Profesionales",
                  "number": "+100",
                  "duration": "3"
               },
               {
                  "id": "003",
                  "label": "Alumnos",
                  "number": "+2000",
                  "duration": "5"
               }
            ]
         },
         "missionSection": {
            "title": "Misión",
            "description": "FORVET “Formación Integral Veterinaria” brinda a médicos veterinarios graduados, de habla hispana, una comunidad de formación  e intercambio profesional entre colegas y docentes de alto prestigio, cada uno en su área de incumbencia.",
            "img": ""
         },
         "philosophySection": {
            "title": "Nos define",
            "description": "La capacidad de innovación, evolución y adaptación al cambio traducida en una oferta académica de excelencia.",
            "img": ""
         },
         "visionSection": {
            "title": "Visión",
            "description": "Soñamos con ser la empresa líder en la formación integral de profesionales elegida por su excelencia académica, calidad humana y compromiso social. En un mundo donde podamos entender que solo desde la formación personal, podremos llegar a ser buenos profesionales y que solo desde una buena profesión podremos generar buenos negocios. Buscamos generar lazos entre comunidades profesionales, abiertas a las necesidades de la sociedad en su conjunto.",
            "img": ""
         },
         "valuesSection": {
            "values": [
               {
                  "icon": "path_to_icon1",
                  "title": "Primer Valor",
                  "description": "Descripción del primer valor"
               },
               {
                  "icon": "path_to_icon2",
                  "title": "Segundo Valor",
                  "description": "Descripción del segundo valor"
               },
               {
                  "icon": "path_to_icon3",
                  "title": "Tercer Valor",
                  "description": "Descripción del tercer valor"
               },
               {
                  "icon": "path_to_icon4",
                  "title": "Cuarto Valor",
                  "description": "Descripción del cuarto valor"
               },
               {
                  "icon": "path_to_icon5",
                  "title": "Quinto Valor",
                  "description": "Descripción del quinto valor"
               }
            ]
         }
      },
      "specialties": {
         "header": "Nuestras Especialidades",
         "description": "Ofrecemos una variedad de especialidades para satisfacer tus necesidades."
      },
      "contact": {
         "contactTitle": "Contacto",
         "formTitle": "Envianos tu consulta",
         "subject": "Consulta desde la web",
         "message": "¡Hola, buenos días! Me contacto desde la web para consultar por...",
         "data": [
            {
               "title": "Email",
               "description": [
                  "administracion@forvet.org"
               ]
            },
            {
               "title": "Teléfono",
               "description": [
                  "+54 9 351 208 6545",
                  "+54 9 351 857 1139"
               ]
            },
            {
               "title": "Horario de atención",
               "description": [
                  "8 a.m. – 8 p.m."
               ],
               "info": "Huso horario: Argentina"
            }
         ],
         "form": {
            "name": "Nombre",
            "namePlaceholder": "Nombre",
            "email": "Email",
            "emailPlaceholder": "hola@forvet.org",
            "phone": "Tefono",
            "message": "Mensaje",
            "messagePlaceholder": "Buenos dias, quería consultar por...",
            "formButton": "Enviar mensaje"
         }
      },
      "coursePaymentPage": {
         "paymentTitle": "Un último paso para formar parte de la comunidad",
         "paymentSubtitle": "¿Todo listo?",
         "paymentForm": {
            "title": "Completa la información para crear el perfil educativo",
            "oldMemberMessage": "¡Ya tengo una cuenta en ForVet!",
            "newMemberMessage": "Aún no tengo cuenta en FORVET",
            "fields": {
               "name": {
                  "label": "Nombre",
                  "placeholder": "Nombre"
               },
               "lastname": {
                  "label": "Apellido",
                  "placeholder": "Apellido"
               },
               "email": {
                  "label": "Email de registro al campus",
                  "placeholder": "Email"
               },
               "emailConfirmation": {
                  "label": "Confirmación de email de registro al campus",
                  "placeholder": "Repite tu email"
               },
               "phone": {
                  "label": "Teléfono"
               },
               "disclaimers": {
                  "first": "Los datos personales proporcionados en este formulario serán utilizados exclusivamente para la creación de tu cuenta de usuario en nuestra plataforma educativa. Si ya posees una cuenta previa, por favor ingresa el correo electrónico asociado a la misma para vincular el curso a tu perfil existente.",
                  "second": "Es importante destacar que el individuo que realiza el pago no necesita ser necesariamente el mismo usuario que accederá al curso. Los detalles de facturación y pago se solicitarán en la plataforma de pago externa. Los datos requeridos en este formulario son fundamentales para el registro y asociación del curso al usuario correspondiente."
               }
            }
         },
         "paymentCard": {
            "discountCode": {
               "label": "Código de descuento",
               "placeholder": "Ingresa tu código"
            },
            "discountButton": "Aplicar descuento",
            "discountButtonMobile": "Aplicar",
            "subtotal": "Subtotal",
            "total": "Total",
            "paymentMethods": {
               "firstPaymentMethod": {
                  "method": "Transferencia bancaria directa",
                  "description": "Realiza tu pago directamente en nuestras cuentas bancarias. Por favor, usa el número del pedido como referencia de pago. Tu pedido no se procesará hasta que se haya recibido el importe en nuestra cuenta."
               },
               "secondPaymentMethod": {
                  "method": "Pagos360",
                  "description": "Aproveche la velocidad y seguridad de Pagos360 al completar su transacción de pago. Esta plataforma confiable facilita el proceso, brindándole tranquilidad y eficiencia en cada transacción."
               },
               "thirdPaymentMethod": {
                  "method": "PayPal",
                  "description": "Opte por la comodidad y seguridad al pagar con PayPal. La plataforma líder en transacciones en línea le ofrece una experiencia sin problemas, permitiéndole realizar pagos de manera fácil y segura con solo unos clics. (Los pagos se realizan en USD)"
               }
            },
            "paymentButton": "Realizar Pago"
         }
      },
      "coursesPage": {
         "heroTitle": "Encontrá el Camino hacia el Éxito Profesional con Nuestros Cursos",
         "heroDescription":  "Diseñados para impulsar tu excelencia académica, nuestros programas te brindarán las herramientas necesarias para destacarte en la profesión. Encuentra, con nosotros, tu camino hacia la especialización.",
         "filters": {
            "firstFilter": "Especialidad",
            "secondFilter": "Tipo de Curso",
            "thirdFilter": "Mes de inicio"
         }
         
      },
      "errorPage": {
         "title": "¡UPS!",
         "textMessage": "Parece que la página que estabas buscando no existe. ¡Te invitamos a volver al inicio!",
         "redirectButton": "Inicio"
      },
      "paymentCheckout": {
         "textData": {
            "image": "",
            "title": "¡Gracias por tu pedido!",
            "subtitle": "Estamos procesando tu pago. Pronto recibirás en tu correo electrónico los pasos a seguir. ¡Bienvenido!",
            "trackingCodeTxt": "Tu código de seguimiento es:",
            "contentText": "Si te quedó alguna duda, o tenes alguna consulta, no dudes en ponerte en contacto con nuestro equipo de soporte.",
            "continueExploringButton": "Seguir explorando cursos",
            "contactUsButton": "Contáctanos"
         }
      },
      "frequentQuestions": {
         "title": "Preguntas frecuentes",
         "description": "Nuestro servicio de asistencia personalizada está ansioso por resolver tus dudas. ¡Aprovéchalo!"
      },
      "transferBankPage": {
         "transferBankHeroText": {
            "title": "Vamos a terminar tu pago",
            "subtitle": "transferencia bancaria",
            "returnButton": "Volver atrás"
         },
         "transferBankSteps": {
            "title": "Para completar tu compra necesitamos que sigas los siguientes pasos:",
            "stepOne": "Transfiere el monto indicado a una de las cuentas bancarias que se presentan.",
            "stepTwo": "Enviá tu comprobante de transferencia. Puedes adjuntarlo más abajo en esta web o enviarlo a tu asesor de ventas.",
            "stepThree": "Un asesor verificará tu pago y aceptará tu pedido. Recibirás un correo electrónico notificando la inscripción.",
            "stepFourOnMainPage": "Nos caracterizamos por ser una empresa comprometida por sus clientes."
         },
         "transferBankSendOptionsTxt": {
            "submitTicket": {
               "label": "Cargá tu archivo",
               "description": "Archivos permitidos: JPG, PNG, PDF",
               "placeholder": "No hay ningun archivo",
               "submitButton": "Enviar"
            },
            "alreadySent": {
               "title": "¿Ya completaste el proceso enviando el comprobante a tu asesor?",
               "endProcessButton": "Finalizar proceso"
            }
         },
         "transferBankAccount": {
            "title": "Podés transferir a cualquier de nuestras cuentas",
            "errorMessage": "Lo siento, no hemos podido cargar los datos.",
            "transferAccountItemsDolars": {
               "firstTitle": "Número de cuenta:",
               "secondTitle": "Nombre:",
               "thirdTitle": "DNI:",
               "fourthTitle": "Tipo:",
               "fifthTitle": "Banco:"
            },
            "transferAccountItemsArgentina": {
               "firstTitle": "CBU:",
               "secondTitle": "Alias:",
               "thirdTitle": "Nombre:",
               "fourthTitle": "CUIT:",
               "fifthTitle": "Tipo:",
               "sixthTitle": "Banco:"
            }
         },
         "transferBankCart": {
            "totalAmount": "Total a pagar:",
            "paymentDetail": "Transferencia bancaria"
         },
         "TransferBankConfirmModalTxt": {
            "title": "¿Ya enviaste el comprobante?",
            "subtitle": "En caso de no haberlo realizado, es momento de hacerlo antes de continuar.",
            "confirmationButton": "Ya lo envié",
            "goBackButton": "Aún no lo envié"
         }
      },
      "courseDetails": {
         "courseDetailsCard": {
            "show": true,
            "badgeTitle": {
               "open": "¡INSCRIPCIONES ABIERTAS!",
               "closed": "¡INSCRIPCIONES CERRADAS!"
            },
            "courseCardModal": {
               "openButtonModal": "Consultar beneficios",
               "modalTitle": "¡Haz click en el logo de la institución para obtener la información del descuento!",
               "buttonAquireOption": "Obtener beneficio"
            },
            "inscriptionButton": "Inscribirse",
            "contactButton": "Consultar un asesor",
            "cardFeaturesText": {
               "firstText": "Duración del curso",
               "secondText": "Horario",
               "thirdText": "Días"
            },
            "defaultFeatures": [
               {
                  "text": "Modalidad 100% online"
               },
               {
                  "text": "Material de soporte para el curso"
               },
               {
                  "text": "Certificado emitido por FORVET"
               },
               {
                  "text": "Clases grabadas"
               }
            ]
         },
         "courseTabs": {
            "show": true,
            "firstTab": "PROGRAMA",
            "secondTab": {
               "title": "EQUIPO",
               "emptyStaffLegend": "Sin información disponible"
            },
            "thirdTab": {
               "title": "VALORACIONES",
               "emptyValorationsLegend": "Aún no hay valoraciones"
            }
         },
         "courseRequirementsTexts": {
            "show": true,
            "title": "Para quien es este curso",
            "subtitle": "requisitos"
         },
         "courseCertifications": {
            "show": true,
            "title": "Certificación",
            "subtitle": "fin del curso",
            "textInfo": "Al finalizar tu curso en FORVET, recibirás un certificado respaldado por destacadas instituciones veterinarias. Este certificado valida tus conocimientos en el campo y es reconocido por la comunidad."
         },
         "benefitsTexts": {
            "show": true,
            "benefitsGeneralInfo": {
               "show": true,
               "title": "Aprendiendo con FORVET",
               "subtitle": "beneficios",
               "textInfo": "Descubre los beneficios de nuestros cursos de especialización en veterinaria. Obtén certificados, aprende de expertos, accede a material de calidad y únete a nuestra comunidad veterinaria."
            },
            "benefitsInfo": {
               "show": true,
               "content": [
                  {
                     "text": "Certificados de Especialización",
                     "description": "Obtén certificados de finalización al concluir con éxito nuestros cursos de veterinaria."
                  },
                  {
                     "text": "Instrucción de Expertos",
                     "description": "Aprende de profesionales de renombre en el campo de la veterinaria y la atención animal."
                  },
                  {
                     "text": "Validación de Instituciones Veterinarias",
                     "description": "Nuestro contenido está respaldado y validado por instituciones líderes en medicina veterinaria."
                  },
                  {
                     "text": "Comunidad Veterinaria",
                     "description": "Únete a nuestra comunidad exclusiva de estudiantes y profesionales de la veterinaria."
                  }
               ]
            }
         }
      }
   },
   "mantine": {
      "typography": {
         "fontFamily": "'Montserrat', sans-serif",
         "fontSizes": {
            "h1": "34px",
            "h2": "26px",
            "h3": "22px",
            "h4": "18px",
            "h5": "16px",
            "h6": "14px",
            "xl": "20px",
            "lg": "18px",
            "md": "10px",
            "sm": "14px",
            "xs": "12px"
         }
      },
      "colors": {
         "light": [
            "#D6EBF6",
            "#C4E2F2",
            "#B3DAEE",
            "#A3D2EA",
            "#94CBE7",
            "#85C4E3",
            "#77BDE0",
            "#69B6DD",
            "#5CB0DA",
            "#4FAAD7"
         ],
         "dark": [
            "#eef4f6",
            "#cddee4",
            "#acc7d2",
            "#8bb1c0",
            "#6a9bae",
            "#518195",
            "#3f6474",
            "#2d4853",
            "#1b2b32",
            "#090e11"
         ],
         "secondaryColor": [
            "#E977A3",
            "#E76899",
            "#E55B8F",
            "#E34D87",
            "#E1417E",
            "#DF3576",
            "#DD296E",
            "#D72267",
            "#CC2062",
            "#C21F5D"
         ],
         "primaryColor": "dark",
         "colorScheme": "dark"
      },
      "boxShadows": {
         "normal": "0px 6px 16px 0px #0000000F"
      },
      "borderRadius": {
         "normal": "4px",
         "defaultRadius": "sm"
      }
   }
}

export const CONFIG: Config = {
   "branding": {
      "logo": "https://campus.forvet.org/static/media/logoForvet_dark.0b93aa616c4ab698b40a607bca2f36ec.svg",
      "logo_sidebar": "https://campus.forvet.org/static/media/forvet_logo_white.aae3e868f53802992d1624b30eb416a9.svg",
      "logo_certificate": "https://campus.forvet.org/static/media/forvet_logo_footer.71a677a0815fad5b81c8.png",
      "logo_certificate_badge": "https://campus.forvet.org/static/media/Certification.f81169ddb8084940813e.png",
      "webUrl": "https://forvet.org/",
      "campusUrl": "https://campus.forvet.org/",
      "institutionalName": "FORVET"
   },
   "colors": {
      "primary": {
         "lightest": "#2c4b5833",
         "light": "#3D6271",
         "main": "#355562",
         "dark": "#2c4b58",
         "darkest": "#243D48",
         "lightestTransparent": "#77bee128"
      },
      "secondary": {
         "light": "#A3D2EA",
         "main": "#77BDE0",
         "dark": "#43A4D4",
         "transparent": "#77BDE01A"
      },
      "tertiary": {
         "light": "#e1568b",
         "main": "#DF3576",
         "dark": "#da1962"
      },
      "base": {
         "light": "#FFFFFF",
         "main": "#F5F5F5",
         "dark": "#DADADA"
      },
      "text": {
         "primary": "#5D5A6F",
         "secondary": "#2C4B58",
         "tertiary": "#FFF",
         "shadowText": "#FFF"
      },
      "common": {
         "white": "#FFF",
         "black": "#212121",
         "blackTransparent": "rgba(0,0,0,0.5)",
         "red": {
            "main": "#DC3D3D",
            "light": "#facbbc"
         },
         "yellow": {
            "main": "#FFCB47",
            "light": "FFF8B8"
         },
         "green": "CAF2C2",
         "mantineError": "#c55c5c"
      }
   },
   "typography": {
      "fontFamily": "'Montserrat', sans-serif",
      "fontWeights": [
         300,
         500,
         700
      ],
      "fontSizes": {
         "h1": "40px",
         "h2": "32px",
         "h3": "24px",
         "h4": "20px",
         "h5": "18px",
         "h6": "16px",
         "body": "16px",
         "small": "14px",
         "tiny": "12px"
      }
   },
   "components": {
      "header": {
         "height": "100px"
      },
      "sidebar": {
         "width": "400px",
         "widthCollapsed": "104px",
         "transition": "all 1s ease-in-out"
      },
      "calendar": {
         "width": "352px",
         "widthCollapsed": "150px"
      }
   },
   "borderRadius": {
      "large": "1.5rem",
      "medium": "1rem",
      "small": "0.625rem"
   },
   "paddings": {
      "fullLayoutPaddingX": "48px",
      "fullLayoutPaddingY": "32px",
      "layoutPaddingX": "48px",
      "layoutPaddingY": "32px",
      "px": "80px",
      "py": "60px",
      "mt": "20px",
      "mb": "20px"
   },
   "boxShadows": {
      "boxShadow": "0px 6px 16px 0px #0000000F",
      "boxShadowMd": "1px 1px 4px #000000b6",
      "boxShadowStrong": "0px 0px 6px #00000063"
   },
   "features": {
      "subscriptionLevel": 2,
      "appRoutes": {
         "home": [
            true,
            true,
            true
         ],
         "misCursos": [
            true,
            true,
            true
         ],
         "misCertificados": [
            true,
            true,
            true
         ],
         "foro": [
            false,
            true,
            true
         ],
         "oportunidades": [
            false,
            false,
            true
         ],
         "miCuenta": [
            true,
            true,
            true
         ],
         "ayuda": [
            false,
            true,
            true
         ]
      },
      "selectFavorites": [
         false,
         false,
         true
      ],
      "pages": {
         "showDecorativeCircle": true,
         "login": {
            "showLoginAnimationImage": true
         },
         "dashboard": {
            "welcomeMessage": true,
            "activeCourseCard": true,
            "reminderAndSponsors": true,
            "dailyRecommendationCard": true
         }
      }
   },
   "media": {
      "loginImages": [
         "https://campus.forvet.org/static/media/animal_1.e48aca0bf85119d7def9.gif",
         "https://campus.forvet.org/static/media/animal_2.a8d42bc65afc36859d7d.gif",
         "https://campus.forvet.org/static/media/animal_3.f22eeb8c52b3b49c6596.gif",
         "https://campus.forvet.org/static/media/animal_4.e53ba6c4a63bac325e17.gif",
         "https://campus.forvet.org/static/media/animal_5.cf8b17a475428a7b2ce9.gif"
      ]
   },
   "texts": {
      "login": {
         "heading": {
            "welcomeText": "¡Bienvenidos al Campus!",
            "loginButtonText": "INGRESAR"
         },
         "onMessageModal": {
            "modalImage": "https://ugokawaii.com/wp-content/uploads/2022/06/dog-distress.gif",
            "modalTitle": "Hay irregularidades en tu cuenta",
            "contactButtonText": "Contáctanos",
            "contactRedirectURL": "https://forvet.org/contacto"
         }
      },
      "sidebar": {
         "home": {
            "text": "Home",
            "redirectTo": "/campus/dashboard"
         },
         "misCursos": {
            "text": "Mis cursos",
            "redirectTo": "/campus/mis-cursos"
         },
         "misCertificados": {
            "text": "Mis certificados",
            "redirectTo": "/campus/certificaciones"
         },
         "foro": {
            "text": "Foro",
            "redirectTo": "/campus/foro"
         },
         "oportunidades": {
            "text": "Oportunidades",
            "redirectTo": "/campus/oportunidades"
         },
         "perfil": {
            "text": "Mi cuenta",
            "redirectTo": "/campus/perfil"
         },
         "ayuda": {
            "text": "Ayuda",
            "redirectTo": "/campus/ayuda"
         },
         "cerrarSesion": "Cerrar sesión"
      },
      "dashboard": {
         "calendar": {
            "title": "Calendario",
            "eventsTypes": {
               "lesson": "Clase",
               "exam": "Exámen",
               "recoveryExam": "Recuperatorio",
               "general": "General",
               "break": "Receso"
            }
         },
         "header": "Hola,",
         "reminderAndSponsors": {
            "title": "Novedades y Recordatorios",
            "noContentText": "No hay nada nuevo para mostrar aquí."
         },
         "dailyRecommendationCard": {
            "title": "Consejo del día:",
            "noContentText": "No hay consejos disponibles para el día de hoy. Regresa mañana para otro consejo del equipo de FORVET."
         }
      },
      "misCursos": {
         "title": "Mis cursos",
         "filterPercentageText": "Porcentaje de avance",
         "noContentText": "No hemos encontrado resultados.",
         "courseCardCompletedText": "Curso completado en un"
      },
      "misCertificados": {
         "title": "Mis Certificados",
         "subtitle": "Certificados Disponibles",
         "noContentText": {
            "text1": "Parece que aún no tienes certificados disponibles!",
            "text2": "¡Continúa creciendo en tu camino para limpiar un poco este polvo!"
         },
         "certificatesCard": {
            "downloadButtonText": "Descargar",
            "validationButtonText": "Ver validez"
         },
         "certificateSurvey": {
            "modalTitle": "Necesitamos que valides este curso antes de poder descargar el certificado"
         },
         "certificateOptions": {
            "downloadButtonText": "Descargar",
            "modalTitle": "¡Felicidades!",
            "modalSubtitle": "Estas son las opciones para descargar tu certificado",
            "onProcessGeneratePDF": "Estamos generando tu certificado...",
            "onSuccessGeneratePDFLink": "O puedes hacer click aquí para abrirlo.",
            "closeModalButtonText": "Cerrar"
         }
      },
      "foro": {
         "title": "Foro FORVET",
         "headerFilters": {
            "latestArticlesButtonText": "Más recientes",
            "oldestArticlesButtonText": "Más antiguos",
            "openRulesModalButtonText": "Reglas del foro",
            "createNewDiscussion": "Nueva discusión",
            "mobile": {
               "createNewDiscussion": "Crear",
               "openRulesMenuButtonText": "Reglamento"
            }
         },
         "noContentText": {
            "title": "Parece que aún no hay discusiones aquí, pero todos empezamos desde cero.",
            "message": "¿Por qué no ser el primero en iniciar una conversación interesante? ¡Es tu oportunidad de compartir tus ideas, hacer preguntas o simplemente conectarte con la comunidad! ¡Adelante, no seas tímido, esperamos ansiosos tu primer mensaje!"
         },
         "reportButtonText": "Denunciar",
         "termsAndConditionsModal": {
            "modalTitle": "Términos y condiciones del foro de FORVET.",
            "acceptButtonText": "Aceptar",
            "cancelButtonText": "Cancelar"
         },
         "rulesModal": {
            "title": "Estas son la reglas del foro de FORVET",
            "acceptButtonText": "Aceptar y cerrar"
         }
      },
      "ayuda": {
         "title": "Centro de Ayuda",
         "subtitle": "Bienvenido al centro de ayuda de nuestro campus.",
         "textInputPlaceholder": "Buscar por palabra/s clave/s",
         "selectInputPlaceholder": "Filtra por tema",
         "advancedQueryForm": {
            "title": "¿No encontraste lo que buscabas?",
            "subtitle": "Ingrese su consulta a nuestro formulario de consultas avanzadas",
            "selectInputLabel": "Tipo de problema",
            "selectInputPlaceholder": "Seleccionar tipo",
            "textInputLabel": "Consulta",
            "textInputPlaceholder": "Escriba su consulta aquí...",
            "sendQuestionButtonText": "Enviar consulta"
         },
         "contactCard": {
            "prevMessageText": "¡Hola, buenos días! Me contacto desde el campus virtual para consultar por...",
            "subjectText": "Consulta desde el campus",
            "items": {
               "email": {
                  "title": "Email",
                  "description": [
                     "administracion@forvet.org"
                  ]
               },
               "cellphone": {
                  "title": "Telefono",
                  "description": [
                     "+54 9 351 208 6545",
                     "+54 9 351 857 1139"
                  ]
               },
               "time": {
                  "title": "Horario de atención",
                  "info": "Huso horario: Argentina",
                  "description": [
                     "8 a.m. – 8 p.m."
                  ]
               }
            }
         }
      },
      "materiales": {
         "title": "Materiales de la clase",
         "subtitle": "Descarga los materiales de tu clase",
         "noContentText": "No hay materiales disponibles."
      },
      "oportunidades": {
         "title": "Oportunidades de FORVET",
         "noContentText": {
            "title": "¡Ups!",
            "subtitle": "Parece que no hay oportunidades disponibles al momento."
         }
      },
      "miCuenta": {
         "title": "Editar perfil",
         "saveChangesButtonText": "Guardar cambios",
         "cancelButtonText": "Cancelar"
      },
      "validateCertificate": {
         "coursePogramTitleText": "Programa del curso:",
         "studentLabelText": "Alumno:",
         "academicModalityLabelText": "Modalidad Académica:",
         "durationLabelText": "Duración:",
         "calificationLabelText": "Calificación:",
         "coordinatorLabelText": "Coordinador Académico:",
         "directorLabelText": "Director:"
      },
      "courseView": {
         "lessonButtonText": "Ver clases",
         "materialButtonText": "Ver material",
         "noContentText": {
            "title": "De momento no hay clases disponibles.",
            "message": "¡Nuestro equipo está trabajando para que accedas a tu contenido lo más pronto posible!"
         },
         "lessonCard": {
            "label": "Clase",
            "buttonText": "Ver Clase"
         },
         "examCard": {
            "label": "Examen",
            "buttonText": "Ir"
         }
      },
      "lessonView": {
         "header": {
            "incomingZoomText": "Esta clase comenzará el",
            "zoomCodeLabelText": "Código zoom",
            "signInClassroom": "Ingresá al aula",
            "watchClassAgainText": "Puedes volver a ver esta clase cuando quieras haciendo click aquí:",
            "playRecordedClassroomButtonText": "Ver grabación"
         },
         "rateLessonBanner": {
            "title": "¡No olvides valorar la clase!",
            "subtitle": "¿Como fue tu experiencia con esta clase?",
            "sendButtonText": "Enviar"
         },
         "lessonDetailsCards": {
            "aboutInfoClass": {
               "title": "Sobre la clase",
               "classDateLabel": "Fecha de dictado:",
               "classTimeLabel": "Hora dictado:",
               "classDurationLabel": "Hora dictado:"
            },
            "materialClassInfoCard": {
               "title": "Descargá el material de esta clase",
               "description": "Aquí hallarás todos los recursos esenciales para llevar a cabo las prácticas en clase, junto con materiales adicionales que te serán útiles",
               "buttonText": "Ver el material de clase"
            },
            "aboutProfessorCard": {
               "singularTeacherText": "Sobre el profesor",
               "pluralTeacherText": "Sobre los profesores",
               "teacherDefaultSpecialty": "Médico Veterinario"
            }
         },
         "lessonNotes": {
            "downloadNotesButtonText": "Descargar notas",
            "saveNotesButtonText": "Guardar notas"
         }
      },
      "prevExam": {
         "title": "Antes de comenzar",
         "considerationsTitle": "Consideraciones",
         "considerationsItems": [
            "Antes de comenzar la evaluación es importante que veas los detalles de la misma.",
            "Recordá que una vez empiece, el reloj comenzará a correr.",
            "Tus respuestas serán enviadas por única vez al finalizar el examen. No son registradas una a una a medida que se avanza. Puedes revisarlas cuantas veces necesites."
         ],
         "actionButtonText": {
            "alreadyStarted": "Continuar evaluación",
            "default": "Iniciar evaluación"
         }
      }
   },
   "mantine": {
      "typography": {
         "fontFamily": "'Montserrat', sans-serif",
         "fontSizes": {
            "h1": "34px",
            "h2": "26px",
            "h3": "22px",
            "h4": "18px",
            "h5": "16px",
            "h6": "14px",
            "xl": "20px",
            "lg": "18px",
            "md": "10px",
            "sm": "14px",
            "xs": "12px"
         }
      },
      "colors": {
         "light": [
            "#D6EBF6",
            "#C4E2F2",
            "#B3DAEE",
            "#A3D2EA",
            "#94CBE7",
            "#85C4E3",
            "#77BDE0",
            "#69B6DD",
            "#5CB0DA",
            "#4FAAD7"
         ],
         "dark": [
            "#eef4f6",
            "#cddee4",
            "#acc7d2",
            "#8bb1c0",
            "#6a9bae",
            "#518195",
            "#3f6474",
            "#2d4853",
            "#1b2b32",
            "#090e11"
         ],
         "secondaryColor": [
            "#E977A3",
            "#E76899",
            "#E55B8F",
            "#E34D87",
            "#E1417E",
            "#DF3576",
            "#DD296E",
            "#D72267",
            "#CC2062",
            "#C21F5D"
         ],
         "primaryColor": "light",
         "colorScheme": "light"
      },
      "boxShadows": {
         "normal": "0px 6px 16px 0px #0000000F"
      },
      "borderRadius": {
         "normal": "4px",
         "defaultRadius": "sm"
      }
   }
}
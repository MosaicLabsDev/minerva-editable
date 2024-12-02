interface Branding {
   logo: string;
   logo_sidebar: string;
   logo_certificate: string;
   logo_certificate_badge: string;
   webUrl: string;
   campusUrl: string;
   institutionalName: string;
}

interface ColorVariants {
   lightest?: string;
   light?: string;
   main: string;
   dark?: string;
   darkest?: string;
   lightestTransparent?: string;
   transparent?: string;
}

interface Colors {
   primary: ColorVariants;
   secondary: ColorVariants;
   tertiary: ColorVariants;
   base: {
      light: string;
      main: string;
      dark: string;
   };
   text: {
      primary: string;
      secondary: string;
      tertiary: string;
      shadowText: string;
   };
   common: {
      white: string;
      black: string;
      blackTransparent: string;
      red: {
         main: string;
         light: string;
      };
      yellow: {
         main: string;
         light: string;
      };
      green: string;
      mantineError: string;
   };
}

interface Typography {
   fontFamily: string;
   fontWeights: number[];
   fontSizes: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      body: string;
      small: string;
      tiny: string;
   };
}

interface Components {
   header: {
      height: string;
   };
   sidebar: {
      width: string;
      widthCollapsed: string;
      transition: string;
   };
   calendar: {
      width: string;
      widthCollapsed: string;
   };
}

interface BorderRadius {
   large: string;
   medium: string;
   small: string;
}

interface Paddings {
   fullLayoutPaddingX: string;
   fullLayoutPaddingY: string;
   layoutPaddingX: string;
   layoutPaddingY: string;
   px: string;
   py: string;
   mt: string;
   mb: string;
}

interface BoxShadows {
   boxShadow: string;
   boxShadowMd: string;
   boxShadowStrong: string;
}

interface AppRoutes {
   home: boolean[];
   misCursos: boolean[];
   misCertificados: boolean[];
   foro: boolean[];
   oportunidades: boolean[];
   miCuenta: boolean[];
   ayuda: boolean[];
}

interface Features {
   subscriptionLevel: number;
   appRoutes: AppRoutes;
   selectFavorites: boolean[];
   pages: {
      showDecorativeCircle: boolean;
      login: {
         showLoginAnimationImage: boolean;
      };
      dashboard: {
         welcomeMessage: boolean;
         activeCourseCard: boolean;
         reminderAndSponsors: boolean;
         dailyRecommendationCard: boolean;
      };
   };
}

interface Media {
   loginImages: string[];
}

interface Texts {
   login: {
      heading: {
         welcomeText: string;
         loginButtonText: string;
      };
      onMessageModal: {
         modalImage: string;
         modalTitle: string;
         contactButtonText: string;
         contactRedirectURL: string;
      };
   };
   sidebar: {
      home: {
         text: string;
         redirectTo: string;
      };
      misCursos: {
         text: string;
         redirectTo: string;
      };
      misCertificados: {
         text: string;
         redirectTo: string;
      };
      foro: {
         text: string;
         redirectTo: string;
      };
      oportunidades: {
         text: string;
         redirectTo: string;
      };
      perfil: {
         text: string;
         redirectTo: string;
      };
      ayuda: {
         text: string;
         redirectTo: string;
      };
      cerrarSesion: string;
   };
   dashboard: {
      calendar: {
         title: string;
         eventsTypes: {
            lesson: string;
            exam: string;
            recoveryExam: string;
            general: string;
            break: string;
         };
      };
      header: string;
      reminderAndSponsors: {
         title: string;
         noContentText: string;
      };
      dailyRecommendationCard: {
         title: string;
         noContentText: string;
      };
   };
   misCursos: {
      title: string;
      filterPercentageText: string;
      noContentText: string;
      courseCardCompletedText: string;
   };
   misCertificados: {
      title: string;
      subtitle: string;
      noContentText: {
         text1: string;
         text2: string;
      };
      certificatesCard: {
         downloadButtonText: string;
         validationButtonText: string;
      };
      certificateSurvey: {
         modalTitle: string;
      };
      certificateOptions: {
         downloadButtonText: string;
         modalTitle: string;
         modalSubtitle: string;
         onProcessGeneratePDF: string;
         onSuccessGeneratePDFLink: string;
         closeModalButtonText: string;
      };
   };
   foro: {
      title: string;
      headerFilters: {
         latestArticlesButtonText: string;
         oldestArticlesButtonText: string;
         openRulesModalButtonText: string;
         createNewDiscussion: string;
         mobile: {
            createNewDiscussion: string;
            openRulesMenuButtonText: string;
         };
      };
      noContentText: {
         title: string;
         message: string;
      };
      reportButtonText: string;
      termsAndConditionsModal: {
         modalTitle: string;
         acceptButtonText: string;
         cancelButtonText: string;
      };
      rulesModal: {
         title: string;
         acceptButtonText: string;
      };
   };
   ayuda: {
      title: string;
      subtitle: string;
      textInputPlaceholder: string;
      selectInputPlaceholder: string;
      advancedQueryForm: {
         title: string;
         subtitle: string;
         selectInputLabel: string;
         selectInputPlaceholder: string;
         textInputLabel: string;
         textInputPlaceholder: string;
         sendQuestionButtonText: string;
      };
      contactCard: {
         prevMessageText: string;
         subjectText: string;
         items: {
            email: {
               title: string;
               description: string[];
            };
            cellphone: {
               title: string;
               description: string[];
            };
            time: {
               title: string;
               info: string;
               description: string[];
            };
         };
      };
   };
   materiales: {
      title: string;
      subtitle: string;
      noContentText: string;
   };
   oportunidades: {
      title: string;
      noContentText: {
         title: string,
         subtitle: string
      }
   };
   miCuenta: {
      title: string,
      saveChangesButtonText: string,
      cancelButtonText: string
   };
   validateCertificate: {
      coursePogramTitleText: string,
      studentLabelText: string,
      academicModalityLabelText: string,
      durationLabelText: string,
      calificationLabelText: string,
      coordinatorLabelText: string,
      directorLabelText: string
   };
   courseView: {
      lessonButtonText: string,
      materialButtonText: string,
      noContentText: {
         title: string,
         message: string
      },
      lessonCard: {
         label: string,
         buttonText: string
      },
      examCard: {
         label: string,
         buttonText: string
      }
   },
   lessonView: {
      header: {
         incomingZoomText: string,
         zoomCodeLabelText: string,
         signInClassroom: string,
         watchClassAgainText: string,
         playRecordedClassroomButtonText:string
      },
      rateLessonBanner: {
         title: string,
         subtitle: string,
         sendButtonText: string
      },
      lessonDetailsCards: {
         aboutInfoClass: {
            title: string,
            classDateLabel: string,
            classTimeLabel: string,
            classDurationLabel:string;
         },
         materialClassInfoCard: {
            title: string,
            description: string,
            buttonText: string
         },
         aboutProfessorCard: {
            singularTeacherText:string,
            pluralTeacherText: string,
            teacherDefaultSpecialty: string
         }
      },
      lessonNotes: {
         downloadNotesButtonText: string,
         saveNotesButtonText: string
      }
   },
   prevExam: {
         title:string,
         considerationsTitle: string,
         considerationsItems: string[]
         actionButtonText: {
            alreadyStarted: string,
            default: string
         }
      }
}

export interface Mantine {
   typography: {
      fontFamily: string,
      fontSizes: {
         h1: string,
         h2: string,
         h3: string,
         h4: string,
         h5: string,
         h6: string,
         xl: string,
         lg: string,
         md: string,
         sm: string,
         xs: string
      }
   },
   colors: {
      light: string[]
      dark: string[]
      secondaryColor: string[],
      primaryColor: string,
      colorScheme: string
   },
   boxShadows: {
      normal: string
   },
   borderRadius: {
      normal: string,
      defaultRadius: string
   }
}

export interface Config {
   branding: Branding;
   colors: Colors;
   typography: Typography;
   components: Components;
   borderRadius: BorderRadius;
   paddings: Paddings;
   boxShadows: BoxShadows;
   features: Features;
   media: Media;
   texts: Texts;
   mantine: Mantine
}



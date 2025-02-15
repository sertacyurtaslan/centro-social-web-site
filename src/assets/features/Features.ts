import erasmus from '../img/courses/courses-img1.jpg'
import centro_qualifica from '../img/courses/courses-img2.jpg'
import escola_segunda from '../img/courses/courses-img3.jpg'
import zona_Z from '../img/courses/courses-img4.jpg'
import news1 from "../img/blog/stop_motion1.jpg"
import news2 from "../img/blog/blog-img2.jpg"
import news3 from "../img/blog/blog-img3.jpg"
import history from "../img/features/features-img1.jpg"
import historyTop from "../img/background/salaoEntrada.jpg"
import socialOrgansTop from "../img/background/auditorio_cse.jpg"
import qualityPolicyTop from "../img/background/parque.jpg"
import instituonalDocumentsTop from "../img/background/documents.jpg"
import saas from "../img/courses/saas_1.jpg"
import saasTop from "../img/courses/saas_1.jpg"
import kindergarten from "../img/courses/courses-img4_.jpg"
import kindergartenTop from "../img/courses/courses-img2_.jpg"
import creche from "../img/courses/creche_img1.jpg"
import crecheTop from "../img/courses/creche_img2.jpg"
import catl from "../img/courses/catl_img2.jpeg"
import catlTop from "../img/courses/catl_img1.jpeg"
import housecareTop from "../img/courses/ad_img2.jpg"
import housecare from "../img/courses/ad_img1.jpg"
import fe from "../img/courses/fe_img1.jpg"
import feTop from "../img/courses/fe_img2.jpg"
import lar from "../img/courses/lar_img1.jpg"
import larTop from "../img/courses/lar_img2.jpg"
import Clds4gTop from "../img/background/home_qualifica.jpg"
import escolhas7gTop from "../img/courses/escolhas_img1.jpg"
import escolhas7g from "../img/courses/escolhas_img2.jpg"
import youthExchangeTop from '../img/background/youth_exchange_top.jpg';
import youthExchange from '../img/background/youth_exchange.jpg';

import e2ovTop from "../img/courses/e2ov_img1.jpg"
import e2ov from "../img/courses/e2ov_img2.jpg"

import cofinanciadosTop from "../img/background/background_convocatoria.jpg"


import logo from "../img/logos/poise.jpg"
import logo1 from "../img/logos/Logo_Portugal_2020.jpg"
import logo2 from "../img/logos/UE_FSE_logo.jpg"
import logo3 from "../img/logos/seg_social.jpeg"
import logo4 from "../img/logos/clds4g.jpg"

import cldsImage from "../img/gallery/clds-img1.jpg"
import cldsImage1 from "../img/gallery/clds-img2.jpg"
import cldsImage2 from "../img/gallery/clds-img3.jpg"
import cldsImage3 from "../img/gallery/clds-img4.jpg"

import Color from "../../theme/Color";

import {Work, ChildCare, BabyChangingStation, Elderly, Article, CalendarToday, Photo, Folder} from '@mui/icons-material';

import logoQualifica from '../img/component/logo_qualifica.jpg';
import { TranslatedText } from '../../types/LanguageTypes';

import moveTop from '../img/background/move_top.jpg';
import move from '../img/background/move.jpg';

export const Features = {

    //---------HOME SCREEN FEATURES---------//
    CAROUSEL: {
        items: [
            {
                mainText: {
                    pt: "Infância e Juventude",
                    en: "Children and Youth"
                },
                subText: {
                    pt: "\"Tudo é possível para um coração cheio de vontade.\"",
                    en: "\"Everything is possible for a heart full of will.\""
                },
            textPlacement: "25%"
        },
        {
                mainText: {
                    pt: "Jardim Infância",
                    en: "Kindergarten"
                },
                subText: {
                    pt: "\"A criança está no centro da nossa ação\"",
                    en: "\"The child is at the center of our action\""
                },
            textPlacement: "50%"
        },
        {
                mainText: {
                    pt: "Lar S. Lourenço",
                    en: "S. Lourenço Home"
                },
                subText: {
                    pt: "Apoiar o idoso a sentir-se útil e válido na comunidade onde vive.",
                    en: "Supporting the elderly to feel useful and valued in their community."
                },
            textPlacement: "50%"
        },
        {
                mainText: {
                    pt: "Creche e Creche Familiar",
                    en: "Nursery and Family Nursery"
                },
                subText: {
                    pt: "Aqueles que passam por nós, não vão sós, deixam um pouco de si, levam um pouco de nós.",
                    en: "Those who pass by us don't go alone, they leave a bit of themselves and take a bit of us."
                },
            textPlacement: "50%"
        }
        ]
    },

    CARD_ITEMS: [
        {
            href: "#courses",
            color: Color.yellow.main,
            icon: Article,
            title: {
                pt: "Projectos",
                en: "Projects"
            }
        },
        {
            href: "#agenda",
            color: Color.green.main,
            icon: CalendarToday,
            title: {
                pt: "Agenda",
                en: "Schedule"
            }
        },
        {
            href: "#galeria",
            color: Color.red.main,
            icon: Photo,
            title: {
                pt: "Galeria",
                en: "Gallery"
            }
        },
        {
            href: "#noticias",
            color: Color.blue.main,
            icon: Folder,
            title: {
                pt: "Noticias",
                en: "News"
            }
        },
    ],

    FIRST_PARALLAX: {
        title: {
            pt: "Convocatória Assembleia Geral",
            en: "General Assembly Notice"
        },
        subTitle: {
            pt: "Discussão e votação do Relatório e Contas relativo ao exercício de 2023",
            en: "Discussion and voting of the Report and Accounts for 2023"
        },
        buttonText: {
            pt: "VER MAIS",
            en: "SEE MORE"
        },
        buttonLink: "documentos_institucionais.html",
    },

    SOCIAL_RESPONSES: {
        title: {
            pt: "Respostas Sociais",
            en: "Social Services"
        },
        items: [
        {
            icon: Work,
            color: Color.yellow.main,
                title: {
                    pt: "FORMAÇÃO EMPREGO",
                    en: "EMPLOYMENT TRAINING"
                },
                text: {
                    pt: "O Centro de Formação e Emprego (CFE) é uma valência do CSE...",
                    en: "The Employment and Training Center (CFE) is a CSE service..."
                }
        },
        {
            icon: ChildCare,
            color: Color.green.main,
                title: {
                    pt: "JARDIM INFÂNCIA",
                    en: "KINDERGARTEN"
                },
                text: {
                    pt: "O jardim-de-infância do Centro Social de Ermesinde é um espaço organizado...",
                    en: "The kindergarten of Centro Social de Ermesinde is an organized space..."
                }
        },
        {
            icon: BabyChangingStation,
            color: Color.red.main,
                title: {
                    pt: "CRECHE",
                    en: "NURSERY"
                },
                text: {
                    pt: "A Creche proporciona um atendimento individualizado às crianças que acolhe (dos 4 meses aos 3 anos) numa atmosfera de segurança e conforto: físico e afetivo...",
                    en: "The Nursery provides individualized care for children (from 4 months to 3 years) in an atmosphere of safety and comfort: physical and emotional..."
                }
        },
        {
            icon: BabyChangingStation,
            color: Color.blue.main,
                title: {
                    pt: "CRECHE FAMILIAR",
                    en: "FAMILY NURSERY"
                },
                text: {
                    pt: "Nasce uma criança… E este acontecimento marca de forma profunda a vida de qualquer progenitor...",
                    en: "A child is born... And this event profoundly marks the life of any parent..."
                }
        },
        {
            icon: Elderly,
            color: Color.purple.main,
                title: {
                    pt: "LAR S. LOURENÇO",
                    en: "S. LOURENÇO HOME"
                },
                text: {
                    pt: "O Lar S. Lourenço é um equipamento que constitui uma resposta social desenvolvida em alojamento colectivo...",
                    en: "S. Lourenço Home is a facility that provides social care in collective accommodation..."
                }
        },
        {
            icon: Elderly,
            color: Color.pink.main,
                title: {
                    pt: "APOIO DOMICILIARIO",
                    en: "HOME CARE"
                },
                text: {
                    pt: "O Serviço de Apoio Domiciliário consiste na prestação de cuidados individualizados e personalizados no domicílio...",
                    en: "The Home Care Service consists of providing individualized and personalized care at home..."
                }
            }
        ]
    },

    PROJECTS: {
        title: {
            pt: "Projectos",
            en: "Projects"
        },
        button: {
            more: {
                pt: "Mais",
                en: "More"
            }
        },
        items: [
            {
                title: {
                    pt: "Erasmus+ Project Move",
                    en: "Erasmus+ Project Move"
                },
                description: {
                    pt: "O Erasmus+ oferece a pessoas de todas as idades a possibilidade de se desenvolverem e partilharem conhecimentos e experiências...",
                    en: "Erasmus+ offers people of all ages the opportunity to develop and share knowledge and experiences..."
                },
            image: erasmus,
            link: "http://move.cse.pt/",
            color: Color.yellow.main,
        },
        {
                title: {
                    pt: "Centro Qualifica",
                    en: "Qualifica Center"
                },
                description: {
                    pt: "O Centro qualifica do Centro Social de Ermesinde foi criado em maio de 2020 e iniciou a sua atividade no dia 01-06-2020...",
                    en: "The Qualifica Center of Centro Social de Ermesinde was created in May 2020 and started its activity on 06-01-2020..."
                },
            image: centro_qualifica,
            link: "centro_qualifica.html",
            color: Color.green.main,
        },
        {
                title: {
                    pt: "Escola Segunda Oportunidade",
                    en: "Second Chance School"
                },
                description: {
                    pt: "A E2OV é uma resposta socioeducativa de Valongo dirigida a jovens em absentismo e abandono escolar precoce...",
                    en: "E2OV is a socio-educational response in Valongo aimed at young people in absenteeism and early school leaving..."
                },
            image: escola_segunda,
            link: "https://www.facebook.com/E2OValongo/",
            color: Color.red.main,
        },
        {
                title: {
                    pt: "ZONA Z e7g",
                    en: "ZONE Z e7g"
                },
                description: {
                    pt: "O projeto ZONA Z-E7G, coordenado pelo CENTRO SOCIAL DE ERMESINDE, visa desenvolver uma resposta socioeducativa...",
                    en: "The ZONE Z-E7G project, coordinated by CENTRO SOCIAL DE ERMESINDE, aims to develop a socio-educational response..."
                },
            image: zona_Z,
            link: "https://www.facebook.com/CSE-ZONA-Z-e7g-356132181910724/",
            color: Color.blue.main,
        },
        ]
    },

    SECOND_PARALLAX: {
        title: {
            pt: "Seja solidário ajude-nos a ajudar",
            en: "Be supportive help us to help"
        },
        subTitle: {
            pt: "Dê a mão a esta causa",
            en: "Join this cause"
        },
        buttonText: {
            pt: "SABER MAIS",
            en: "LEARN MORE"
        },
        buttonLink: "documentos_institucionais.html",
    },

    COUNTERS: {
        title: {
            pt: "Centro Social Ermesinde",
            en: "Ermesinde Social Center"
        },
        subtitle: {
            pt: "Conheça melhor a nossa instituição",
            en: "Get to know our institution better"
        },
        items: [
            {
                count: 368,
                label: {
                    pt: "Crianças",
                    en: "Children"
                },
                bgColor: Color.yellow.main
            },
            {
                count: 161,
                label: {
                    pt: "Idosos",
                    en: "Elders"
                },
                bgColor: Color.green.main
            },
            {
                count: 126,
                label: {
                    pt: "Trabalhadores",
                    en: "Workers"
                },
                bgColor: Color.red.main
            },
            {
                count: 64,
                label: {
                    pt: "Anos Existência",
                    en: "Years of Existence"
                },
                bgColor: Color.green.main
            },
        ]
    },

    //TODO: Add news to the news page   
    NEWS: {
        title: {
            pt: "Últimas Noticias",
            en: "Latest News"
        },
        seeMore: {
            pt: "VER MAIS",
            en: "SEE MORE"
        },
        items: [
        {
            image: news1,
            chipLabel: "03 Out",
            chipColor: Color.yellow.main,
            title: "Cinema Animação",
            description: "O Centro Social de Ermesinde, no âmbito do projeto Zona Z, vai desenvolver um workshop de Cinema de Animação. \nPara mais informações: 229758774",
            link: "https://forms.gle/mjmtd8BsDCLfCW6c9",
            buttonText: "Inscrições",
        },
        {
            image: news2,
            chipLabel: "27/28 Jun",
            chipColor: Color.green.main,
            title: "Festa Verão",
            description: "Festa de Verão do Centro Social de Ermesinde, no largo da feira velha de Ermesinde. Atualização do programa. Não percam. Entrada livre!",
            link: "",
            buttonText: "Ler Mais",
        },
        {
            image: news3,
                chipLabel: "1ª Terça Cada Mês",
            chipColor: Color.red.main,
            title: "Repair Café",
            description: "Não gostas de desperdiçar? Nós ajudamos-te a reparar!!! Traz os pequenos electrodomésticos avariados ...",
            link: "",
            buttonText: "Ler Mais",
        }
        ]
    },

    THIRD_PARALLAX: {
        title: {
            pt: "aCARRINHAr - A Social CamperVan",
            en: "aCARRINHAr - A Social CamperVan"
        },
        subTitle: {
            pt: "O Centro Social de Ermesinde, Instituição Particular de Solidariedade Social, com mais de meio século de existência e de intervenção no setor social, pretende REPARAR...",
            en: "Centro Social de Ermesinde, a Private Social Solidarity Institution with over half a century of existence and intervention in the social sector, aims to REPAIR..."
        },
        buttonText: {
            pt: "SABER MAIS",
            en: "LEARN MORE"
        },
        buttonLink: "https://ppl.pt/acarrinhar?fbclid=IwAR0j8zQ6hc3_zAFpSdP46y2GPIZS3XSjKRRdvpJNQMfQCBD_c5tfosdZgqs",
    },

    //------------HISTORY PAGE-----------//
    HISTORY: {
        topImage: historyTop,
        title: {
            pt: "Centro Social de Ermesinde",
            en: "Ermesinde Social Center"
        },
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/" 
            },
            { 
                label: { pt: "História", en: "History" }, 
                link: "/historia" 
            },
        ],
        content: {
            pt: [
            "O Centro Social de Ermesinde foi fundado a 15 de fevereiro de 1955 e desempenha um importante papel de apoio social junto das populações carenciadas da freguesia.",
            "Esta instituição, de cariz eminentemente social, dedica-se à prestação serviços à comunidade, em áreas tão importantes e sensíveis como a guarda, educação e ocupação dos tempos livres de crianças (creche, jardim de infância e A.T.L.); o apoio domiciliário e residencial a idosos e a promoção social, cultural e económica de pessoas em situação de exclusão, concorrendo, assim, para a melhoria da qualidade da vida da comunidade local.",
            "Procurando sempre acompanhar as necessidades das populações locais, em particular das mais desfavorecidas, o Centro Social de Ermesinde é a única instituição da freguesia que abrange, simultânea e diretamente, todos os grupos etários, num universo de mais de 500 pessoas.",
            "O Centro Social de Ermesinde tem ao seu serviço mais de 120 trabalhadores e dispõe atualmente de 1.000 sócios contribuintes.",
        ],
            en: [
                "The Ermesinde Social Center was founded on February 15, 1955, and plays an important role in providing social support to the needy populations of the parish.",
                "This institution, with an eminently social nature, is dedicated to providing community services in areas as important and sensitive as childcare, education and leisure activities (nursery, kindergarten and A.T.L.); home and residential support for the elderly and social, cultural and economic promotion of people in situations of exclusion, thus contributing to improving the quality of life of the local community.",
                "Always seeking to meet the needs of local populations, particularly the most disadvantaged, the Ermesinde Social Center is the only institution in the parish that covers, simultaneously and directly, all age groups, in a universe of more than 500 people.",
                "The Ermesinde Social Center has more than 120 workers and currently has 1,000 contributing members.",
            ]
        },
        image: history,
    },

    //------------SOCIAL ORGANS PAGE-----------//
    SOCIAL_ORGANS: {
        topImage: socialOrgansTop,
        title: {
            pt: "Órgãos Sociais",
            en: "Social Bodies"
        },
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "Órgãos Sociais", en: "Social Bodies" }, 
                link: "/orgaos_sociais" 
            },
        ],
        management: {
            mesaAssembleiaGeral: {
                title: {
                    pt: "Mesa da Assembleia Geral",
                    en: "General Assembly Board"
                },
                presidente: "Abílio Villas Boas Ribeiro",
                vicePresidente: "Catarina Maria Moreira das Neves Lobo",
                secretario: "Almiro Hermínio Teixeira Guimarães",
            },
            direcao: {
                title: {
                    pt: "Direcção",
                    en: "Board of Directors"
                },
                presidente: "Henrique Queirós Rodrigues",
                vicePresidentes: [
                    "Ana Paula Fonseca Telles Moreira Silva",
                    "António Joaquim Tavares Queijo",
                ],
                tesoureiro: "Maria Alcina Vaz Meireles",
                secretario: "Joaquina Patrício Oliveira",
                vogais: [
                    "Adelino Machado Soares",
                    "Maria Augusta Ferreira Moura",
                    "Maria de Fátima Couto Almeida Pinto",
                    "Raul da Conceição Santos",
                ],
            },
            conselhoFiscal: {
                title: {
                    pt: "Conselho Fiscal",
                    en: "Supervisory Board"
                },
                presidente: "Artur Lopes Carneiro",
                secretario: "Lequecinda da Silva Figueiredo",
                relator: "Adão Manuel da Silva Lopes",
            },
        },
    },

    //------------QUALITY POLICY PAGE-----------//
    QUALITY_POLICY: {
        topImage: qualityPolicyTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "Política da Qualidade", en: "Quality Policy" }, 
                link: "/politica_da_qualidade" 
            },
        ],
        title: {
            pt: "Política da Qualidade",
            en: "Quality Policy"
        },
        objective: {
            pt: "Objectivo: Melhorar a vida das pessoas",
            en: "Objective: Improving people's lives"
        },
        content: {
            pt: [
            'O Centro Social de Ermesinde (CSE) é uma Instituição Particular de Solidariedade Social (IPSS), independente, apartidária e sem fins lucrativos, com mais de meio século de existência, que tem como principal objetivo o desenvolvimento da comunidade de Ermesinde em que está inserido, melhorando as condições de vida e a igualdade de oportunidades da população, procurando soluções diferenciadas e adaptáveis às características dos reais problemas instalados nessa comunidade, prestando serviços de qualidade, quer do ponto de vista social e humano, quer do ponto de vista técnico; cumprindo os requisitos do SGQ e da Melhoria Contínua.',
            'Para desenvolver esta atividade define uma Política de permanente desenvolvimento da sua competência, de cooperação e de diálogo, quer no seio do próprio setor solidário, quer com os outros setores da sociedade.',
            'Sendo uma instituição de proximidade, o CSE entende que os nossos colaboradores são a chave do sucesso - daí haver uma constante preocupação com o seu bem-estar, condições de trabalho, formação e comunicação e uma progressiva identificação com os valores da instituição.',
                'Enquanto entidade com responsabilidade no desenvolvimento social local, constitui fator estratégico para o sucesso da sua intervenção criar níveis de confiança, autonomia e liberdade que fomentem nas pessoas a vontade de ultrapassar os diversos obstáculos com que se deparam.',
            'Com vista à sustentabilidade ambiental, a instituição procura adotar as melhores práticas de trabalho sensibilizando também a comunidade local.',
                'O CSE assume-se ainda como estrutura de promoção e defesa dos interesses da comunidade onde está inserido com o poder político.'
            ],
            en: [
                'The Ermesinde Social Center (CSE) is a Private Social Solidarity Institution (IPSS), independent, non-partisan and non-profit, with more than half a century of existence, whose main objective is the development of the Ermesinde community in which it is inserted, improving living conditions and equal opportunities for the population, seeking differentiated solutions adaptable to the characteristics of real problems installed in this community, providing quality services, both from a social and human point of view, and from a technical point of view; complying with QMS requirements and Continuous Improvement.',
                'To develop this activity, it defines a Policy of permanent development of its competence, cooperation and dialogue, both within the solidarity sector itself and with other sectors of society.',
                'Being a proximity institution, CSE understands that our employees are the key to success - hence there is a constant concern with their well-being, working conditions, training and communication and a progressive identification with the institution\'s values.',
                'As an entity with responsibility in local social development, it is a strategic factor for the success of its intervention to create levels of trust, autonomy and freedom that encourage people to overcome the various obstacles they face.',
                'With a view to environmental sustainability, the institution seeks to adopt the best work practices while also raising awareness in the local community.',
                'CSE also assumes itself as a structure for promoting and defending the interests of the community where it is inserted with political power.'
            ]
        },
        values: {
            pt: 'Valores: solidariedade, proximidade, qualidade, profissionalismo, ética, iniciativa, compromisso, humanismo e trabalho em rede.',
            en: 'Values: solidarity, proximity, quality, professionalism, ethics, initiative, commitment, humanism and networking.'
        },
        approvedDate: {
            pt: "Aprovado em reunião da Direção no dia 09 de abril de 2013.",
            en: "Approved at the Board meeting on April 9, 2013."
        }
    },

    //------------INSTITUTIONAL PAGE-----------//

    INSTITUONAL_DOCUMENTS_TOP: {
        topImage: instituonalDocumentsTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "Documentos Institucionais", en: "Institutional Documents" }, 
                link: "/documentos_institucionais" 
            },
        ],
        ui: {
            documentColumn: {
                pt: "Documento",
                en: "Document"
            },
            downloadColumn: {
                pt: "Descarregar",
                en: "Download"
            },
            downloadButton: {
                pt: "Baixar",
                en: "Download"
            },
            unavailable: {
                pt: "Indisponível",
                en: "Unavailable"
            },
            noDocuments: {
                pt: "Sem documentos disponíveis.",
                en: "No documents available."
            }
        }
    },

    INSTITUONAL_DOCUMENTS: [
        {
            title: {
                pt: "Inscrições Educação Pré-Escolar",
                en: "Pre-School Education Registration"
            },
            bgColor: Color.red.main,
            files: [
                {
                    name: {
                        pt: "Ficha de Inscrição Pré-Escolar",
                        en: "Pre-School Registration Form"
                    },
                    link: "docs/EPE_FichaInscricao.pdf"
                },
                {
                    name: {
                        pt: "Ficha de Renovação",
                        en: "Renewal Form"
                    },
                    link: ""
                },
                {
                    name: {
                        pt: "Documentos a Apresentar",
                        en: "Required Documents"
                    },
                    link: "docs/EPE_DocsApresen.pdf"
                }
            ]
        },
        {
            title: {
                pt: "Inscrições ATL",
                en: "After School Activities Registration"
            },
            bgColor: Color.blue.main,
            files: [
                {
                    name: {
                        pt: "Ficha Inscrição ATL",
                        en: "After School Activities Registration Form"
                    },
                    link: "docs/FichaInscricao_ATL.pdf"
                },
                {
                    name: {
                        pt: "Ficha Renovação",
                        en: "Renewal Form"
                    },
                    link: ""
                },
                {
                    name: {
                        pt: "Documentos a Apresentar",
                        en: "Required Documents"
                    },
                    link: "docs/DocsApresen_ATL.pdf"
                }
            ]
        },
        {
            title: {
                pt: "Inscrições Lar S. Lourenço",
                en: "S. Lourenço Home Registration"
            },
            bgColor: Color.green.main,
            files: [
                {
                    name: {
                        pt: "Ficha Inscrição Lar",
                        en: "Home Registration Form"
                    },
                    link: "docs/FichaInscricao_LAR.pdf"
                },
                {
                    name: {
                        pt: "Documentos a Apresentar",
                        en: "Required Documents"
                    },
                    link: "docs/DocsApresen_LAR.pdf"
                }
            ]
        },
        {
            title: {
                pt: "Inscrições Serviço Apoio Domiciliário",
                en: "Home Care Service Registration"
            },
            bgColor: Color.yellow.main,
            files: [
                {
                    name: {
                        pt: "Ficha Inscrição SAD",
                        en: "Home Care Registration Form"
                    },
                    link: "docs/FxInscricao_SAD.pdf"
                },
                {
                    name: {
                        pt: "Documentos a Apresentar",
                        en: "Required Documents"
                    },
                    link: "docs/DocsApresen_SAD.pdf"
                }
            ]
        },
        {
            title: {
                pt: "Convocatórias",
                en: "Meeting Notices"
            },
            bgColor: Color.purple.main,
            files: [
                {
                    name: {
                        pt: "Convocatória Assembleia Geral 2017",
                        en: "General Assembly Notice 2017"
                    },
                    link: "docs/convocatoria_assembleia_Apresentacao_contas_2017.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral 2018",
                        en: "General Assembly Notice 2018"
                    },
                    link: "docs/Convocatoria_votacao_Apresentacao_Contas_2018.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral 2019",
                        en: "General Assembly Notice 2019"
                    },
                    link: "docs/convocatoria_votacaoOrcamento_2019.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral Novembro de 2019",
                        en: "General Assembly Notice November 2019"
                    },
                    link: "docs/convocatoria_planoActividades_112019.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral 2020",
                        en: "General Assembly Notice 2020"
                    },
                    link: "docs/convocatoria_assembleia_Apresentacao_contas_2020.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral Extraordinária 2020",
                        en: "General Assembly Notice Extraordinary 2020"
                    },
                    link: "docs/convocatoria_extraordinaria_2020.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral 2021",
                        en: "General Assembly Notice 2021"
                    },
                    link: "docs/Convocatoria_votacao_Apresentacao_Contas_2021.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral Nov 2021",
                        en: "General Assembly Notice November 2021"
                    },
                    link: "docs/convocatoria_votacaoOrcamento_2022.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral Março 2022",
                        en: "General Assembly Notice March 2022"
                    },
                    link: "docs/convocatoria_assembleia_Apresentacao_contas_2021.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral Nov 2022",
                        en: "General Assembly Notice November 2022"
                    },
                    link: "docs/convocatoria_votacaoOrcamento_2023.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral Extraordinária 30 Nov 2022",
                        en: "General Assembly Notice Extraordinary 30 November 2022"
                    },
                    link: "docs/CONVOCATÓRIA_Ratificação_Assembleia_Extraordinaria_EMPRESTIMO_2020.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral Março de 2023",
                        en: "General Assembly Notice March 2023"
                    },
                    link: "docs/Convocatoria_votacao_Apresentacao_Contas_2022.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral Extraordinária Novembro 2023",
                        en: "General Assembly Notice Extraordinary November 2023"
                    },
                    link: "docs/convocatoria_extraordinaria_Nov_2023.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral Novembro de 2023",
                        en: "General Assembly Notice November 2023"
                    },
                    link: "docs/convocatoria_votacaoOrcamento_2024.pdf"
                },
                {
                    name: {
                        pt: "Convocatória Assembleia Geral Março de 2024",
                        en: "General Assembly Notice March 2024"
                    },
                    link: "docs/Convocatoria_votacao_Apresentacao_Contas_2023.pdf"
                }
            ]
        },
        {
            title: {
                pt: "Demonstrações Financeiras",
                en: "Financial Statements"
            },
            bgColor: Color.pink.main,
            files: [
                {
                    name: {
                        pt: "Demonstrações Financeiras 2017",
                        en: "Financial Statements 2017"
                    },
                    link: "docs/demonstracaoFinanceira2017.pdf"
                },
                {
                    name: {
                        pt: "Demonstrações Financeiras 2018",
                        en: "Financial Statements 2018"
                    },
                    link: "docs/demonstracaoFinanceira2018.pdf"
                },
                {
                    name: {
                        pt: "Demonstrações Financeiras 2019",
                        en: "Financial Statements 2019"
                    },
                    link: "docs/demonstracaoFinanceira2019.pdf"
                },
                {
                    name: {
                        pt: "Certificação Legal das contas 2019",
                        en: "Legal Certification of Accounts 2019"
                    },
                    link: "docs/Certif_Legal_Contas_2019_CSE.pdf"
                },
                {
                    name: {
                        pt: "Demonstrações Financeiras 2020",
                        en: "Financial Statements 2020"
                    },
                    link: "docs/demonstracaoFinanceira2020.pdf"
                },
                {
                    name: {
                        pt: "Certificação Legal das contas 2020",
                        en: "Legal Certification of Accounts 2020"
                    },
                    link: "docs/Certif_Legal_Contas_2020_CSE.pdf"
                },
                {
                    name: {
                        pt: "Demonstrações Financeiras 2021",
                        en: "Financial Statements 2021"
                    },
                    link: "docs/demonstracaoFinanceira2021.pdf"
                },
                {
                    name: {
                        pt: "Certificação Legal das contas 2021",
                        en: "Legal Certification of Accounts 2021"
                    },
                    link: "docs/Certif_Legal_Contas_2021_CSE.pdf"
                },
                {
                    name: {
                        pt: "Demonstrações Financeiras 2022",
                        en: "Financial Statements 2022"
                    },
                    link: "docs/demonstracaoFinanceira2022.pdf"
                },
                {
                    name: {
                        pt: "Certificação Legal das contas 2022",
                        en: "Legal Certification of Accounts 2022"
                    },
                    link: "docs/Certif_Legal_Contas_2021_CSE.pdf"
                }
            ]
        },
        {
            title: {
                pt: "Relatório Actividade e Contas",
                en: "Activity and Financial Report"
            },
            bgColor: Color.red.main,
            files: [
                {
                    name: {
                        pt: "Relatório Actividade e Contas 2017",
                        en: "Activity and Financial Report 2017"
                    },
                    link: "docs/RelatorioAtividadesContas2017.pdf"
                },
                {
                    name: {
                        pt: "Relatório Actividade e Contas 2018",
                        en: "Activity and Financial Report 2018"
                    },
                    link: "docs/relatoriocontas_2018.pdf"
                },
                {
                    name: {
                        pt: "Relatório Actividade e Contas 2019",
                        en: "Activity and Financial Report 2019"
                    },
                    link: "docs/relatoriocontas_2019.pdf"
                },
                {
                    name: {
                        pt: "Relatório Actividade e Contas 2020",
                        en: "Activity and Financial Report 2020"
                    },
                    link: "docs/RelatorioAtividadesContas2020.pdf"
                },
                {
                    name: {
                        pt: "Relatório Actividade e Contas 2021",
                        en: "Activity and Financial Report 2021"
                    },
                    link: "docs/RelatorioAtividadesContas2021.pdf"
                },
                {
                    name: {
                        pt: "Relatório Actividade e Contas 2022",
                        en: "Activity and Financial Report 2022"
                    },
                    link: "docs/RelatorioAtividadesContas2022.pdf"
                },
                {
                    name: {
                        pt: "Relatório Actividade e Contas 2023",
                        en: "Activity and Financial Report 2023"
                    },
                    link: "docs/RelatórioAtividadesContas CSE 2023_final.pdf"
                }
            ]
        },
        {
            title: {
                pt: "Estatutos Centro Social Ermesinde",
                en: "Ermesinde Social Center Statutes"
            },
            bgColor: Color.green.main,
            files: [
                {
                    name: {
                        pt: "Estatutos",
                        en: "Statutes"
                    },
                    link: "docs/EstatutosCSE.pdf"
                }
            ]
        },
        {
            title: {
                pt: "Plano de Actividades e Orçamento",
                en: "Activities Plan and Budget"
            },
            bgColor: Color.pink.main,
            files: [
                {
                    name: {
                        pt: "Actividades e Orçamento 2019",
                        en: "Activities and Budget 2019"
                    },
                    link: "docs/planoActividades2019.pdf"
                },
                {
                    name: {
                        pt: "Actividades e Orçamento 2020",
                        en: "Activities and Budget 2020"
                    },
                    link: "docs/planoActividades2020.pdf"
                },
                {
                    name: {
                        pt: "Actividades e Orçamento 2021",
                        en: "Activities and Budget 2021"
                    },
                    link: "docs/planoActividades2021.pdf"
                },
                {
                    name: {
                        pt: "Actividades e Orçamento 2022",
                        en: "Activities and Budget 2022"
                    },
                    link: "docs/planoActividades2022.pdf"
                },
                {
                    name: {
                        pt: "Actividades e Orçamento 2023",
                        en: "Activities and Budget 2023"
                    },
                    link: "docs/planoActividades2023.pdf"
                },
                {
                    name: {
                        pt: "Actividades e Orçamento 2024",
                        en: "Activities and Budget 2024"
                    },
                    link: "docs/PlanoAtividadesOrçamento CSE-2024_nov-1.pdf"
                }
            ]
        },
        {
            title: {
                pt: "Regulamentos Internos",
                en: "Internal Regulations"
            },
            bgColor: Color.blue.main,
            files: [
                {
                    name: {
                        pt: "Regulamento Interno - Creche",
                        en: "Internal Regulations - Nursery"
                    },
                    link: "docs/RI CRE-2.pdf"
                },
                {
                    name: {
                        pt: "Regulamento Interno - Creche Familiar",
                        en: "Internal Regulations - Family Nursery"
                    },
                    link: "docs/RI CRF-2.pdf"
                },
                {
                    name: {
                        pt: "Regulamento Interno - Jardim de Infância",
                        en: "Internal Regulations - Kindergarten"
                    },
                    link: "docs/RI JAI-4.pdf"
                },
                {
                    name: {
                        pt: "Regulamento Interno - CATL",
                        en: "Internal Regulations - CATL"
                    },
                    link: "docs/RI ATL-4.pdf"
                },
                {
                    name: {
                        pt: "Regulamento Interno - LAR",
                        en: "Internal Regulations - S. Lourenço Home"
                    },
                    link: "docs/RI LAR-1.pdf"
                },
                {
                    name: {
                        pt: "Regulamento Interno - SAD",
                        en: "Internal Regulations - Home Care"
                    },
                    link: "docs/RI_SAD.pdf"
                }
            ]
        },
    ],

    KINDERGARTEN: {
        topImage: kindergartenTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "Jardim Infância", en: "Kindergarten" }, 
                link: "/jardim_infancia" 
            },
        ],
        title: {
            pt: "Jardim Infância",
            en: "Kindergarten"
        },
        content: {
            pt: [
            'Integrado na missão do Centro Social de Ermesinde, o Jardim de Infância é uma resposta social de natureza educativa, com capacidade para acolher crianças entre os 3 e os 6 anos de idade. Este espaço dedica-se a promover o desenvolvimento integral das crianças, num ambiente seguro, acolhedor e estimulante.',
            'Os objetivos centrais do nosso Jardim de Infância incluem:',
            '• Apoiar a conciliação da vida familiar e profissional das famílias, garantindo um acompanhamento de qualidade às crianças durante o horário laboral dos encarregados de educação;',
            '• Fomentar o desenvolvimento global da criança, assegurando o respeito pelas suas características individuais, numa abordagem personalizada e inclusiva;',
            '• Promover a aprendizagem através de atividades lúdicas e educativas, estimulando competências sociais, emocionais e cognitivas;',
            '• Incentivar a colaboração ativa com as famílias, num trabalho conjunto que enriqueça o processo educativo e o bem-estar da criança.',
            'Com uma equipa de profissionais qualificados e dedicados, o Jardim de Infância do Centro Social de Ermesinde é um espaço onde cada criança é valorizada, respeitada e incentivada a crescer feliz e confiante, construindo as bases para o seu futuro.'
        ],
            en: [
                'Integrated into the mission of Ermesinde Social Center, the Kindergarten is an educational social response, with capacity to welcome children between 3 and 6 years old. This space is dedicated to promoting the integral development of children in a safe, welcoming, and stimulating environment.',
                'The central objectives of our Kindergarten include:',
                '• Support the reconciliation of family and professional life, ensuring quality care for children during parents\' working hours;',
                '• Foster the child\'s global development, ensuring respect for their individual characteristics through a personalized and inclusive approach;',
                '• Promote learning through recreational and educational activities, stimulating social, emotional, and cognitive skills;',
                '• Encourage active collaboration with families in joint work that enriches the educational process and child\'s well-being.',
                'With a team of qualified and dedicated professionals, the Kindergarten of Ermesinde Social Center is a space where each child is valued, respected, and encouraged to grow happy and confident, building the foundations for their future.'
            ]
        },
        image: kindergarten,
    },

    CRECHE: {
        topImage: crecheTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "Creche", en: "Nursery" }, 
                link: "/creche" 
            },
        ],
        title: {
            pt: "Creche",
            en: "Nursery"
        },
        content: {
            pt: [
            "A Creche do Centro Social de Ermesinde é uma resposta social de natureza socioeducativa, destinada ao acolhimento de crianças desde os 4 meses até aos 3 anos de idade. Com capacidade para proporcionar um ambiente seguro, afetuoso e estimulante, a Creche é um espaço dedicado ao apoio às famílias e ao desenvolvimento integral das crianças nas suas primeiras etapas de vida.",
            "Os principais objetivos da nossa Creche incluem:",
            "• Facilitar a conciliação da vida profissional e familiar dos pais e cuidadores, assegurando o cuidado diário e personalizado às crianças;",
            "• Colaborar com as famílias na partilha de cuidados e responsabilidades educativas, promovendo uma relação de confiança e cooperação;",
            "• Estimular o desenvolvimento físico, emocional, social e cognitivo da criança, através de atividades adequadas à sua faixa etária e necessidades individuais;",
            "• Garantir um ambiente de segurança e bem-estar, onde cada criança é respeitada e valorizada como ser único em crescimento.",
            "Com uma equipa de profissionais experientes e dedicados, a Creche do Centro Social de Ermesinde procura contribuir para o desenvolvimento harmonioso das crianças, oferecendo-lhes as melhores condições para crescerem felizes e saudáveis, num espaço que as prepara para as próximas fases da vida."
        ],
            en: [
                "The Nursery of Ermesinde Social Center is a socio-educational social response, designed to welcome children from 4 months to 3 years of age. With the capacity to provide a safe, affectionate, and stimulating environment, the Nursery is a space dedicated to supporting families and the integral development of children in their early stages of life.",
                "The main objectives of our Nursery include:",
                "• Facilitate the reconciliation of professional and family life of parents and caregivers, ensuring daily and personalized care for children;",
                "• Collaborate with families in sharing educational care and responsibilities, promoting a relationship of trust and cooperation;",
                "• Stimulate the child's physical, emotional, social, and cognitive development through activities appropriate to their age group and individual needs;",
                "• Ensure an environment of safety and well-being, where each child is respected and valued as a unique growing being.",
                "With a team of experienced and dedicated professionals, the Nursery of Ermesinde Social Center seeks to contribute to the harmonious development of children, offering them the best conditions to grow happy and healthy, in a space that prepares them for the next phases of life."
            ]
        },
        image: creche,
    },

    CATL: {
        topImage: catlTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "CATL", en: "CATL" }, 
                link: "/catl" 
            },
        ],
        title: {
            pt: "CATL",
            en: "CATL"
        },
        content: {
            pt: [
            "O Centro de Atividades de Tempos Livres (CATL) do Centro Social de Ermesinde é uma resposta social que visa apoiar as famílias e proporcionar atividades educativas e recreativas a crianças e jovens após o horário escolar. Destinado a crianças com idades compreendidas entre os 6 e os 12 anos, o CATL oferece um espaço seguro e dinâmico onde os pequenos podem expandir suas habilidades e talentos enquanto se divertem.",
            "Os principais objetivos do CATL incluem:",
            "• Oferecer uma resposta educativa e lúdica para as crianças, permitindo-lhes um equilíbrio entre o estudo e o lazer após a escola;",
            "• Promover o desenvolvimento pessoal e social dos participantes, incentivando a cooperação, a responsabilidade e a autonomia por meio de atividades em grupo;",
            "• Proporcionar um ambiente estimulante e seguro, onde as crianças possam aprender, brincar e explorar novas experiências de forma divertida e enriquecedora;",
            "• Colaborar estreitamente com as famílias, assegurando que as necessidades das crianças sejam atendidas de maneira integral e personalizada.",
            "Com uma equipa de profissionais qualificados e motivados, o CATL do Centro Social de Ermesinde é mais do que um espaço de cuidados: é um lugar onde as crianças podem crescer, aprender e desenvolver-se de forma divertida, social e criativa."
        ],
            en: [
                "The Leisure Time Activities Center (CATL) of Ermesinde Social Center is a social response aimed at supporting families and providing educational and recreational activities for children and young people after school hours. Designed for children aged 6 to 12 years, CATL offers a safe and dynamic space where children can expand their skills and talents while having fun.",
                "The main objectives of CATL include:",
                "• Provide an educational and recreational response for children, allowing them to balance study and leisure after school;",
                "• Promote personal and social development of participants, encouraging cooperation, responsibility, and autonomy through group activities;",
                "• Provide a stimulating and safe environment where children can learn, play, and explore new experiences in a fun and enriching way;",
                "• Work closely with families, ensuring that children's needs are met in a comprehensive and personalized way.",
                "With a team of qualified and motivated professionals, the CATL of Ermesinde Social Center is more than a care space: it is a place where children can grow, learn, and develop in a fun, social, and creative way."
            ]
        },
        image: catl,
    },

    LAR: {
        topImage: larTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "Lar S. Lourenço", en: "S. Lourenço Home" }, 
                link: "/lar_s_lourenco" 
            },
        ],
        title: {
            pt: "Lar S. Lourenço",
            en: "S. Lourenço Home"
        },
        content: {
            pt: [
            "O Lar S. Lourenço, integrado no Centro Social de Ermesinde, é uma resposta social destinada a acolher pessoas idosas que necessitam de apoio contínuo para assegurar o seu bem-estar e qualidade de vida. Este espaço oferece um ambiente familiar e seguro, promovendo o conforto e a dignidade dos seus residentes.",
            "Os principais objetivos do Lar S. Lourenço incluem:",
            "• Proporcionar cuidados de saúde, higiene e alimentação adaptados às necessidades individuais de cada residente;",
            "• Promover a convivência social e a integração, através de atividades lúdicas, culturais e recreativas;",
            "• Garantir um ambiente acolhedor e seguro, assegurando a qualidade de vida e o respeito pela individualidade de cada pessoa;",
            "• Apoiar as famílias, oferecendo-lhes a tranquilidade de saber que os seus entes queridos estão em boas mãos.",
            "Com uma equipa de profissionais qualificados e dedicados, o Lar S. Lourenço é mais do que um espaço de acolhimento: é um lar onde o cuidado, a atenção e o respeito se encontram no centro de todas as ações."
        ],
            en: [
                "S. Lourenço Home, integrated into Ermesinde Social Center, is a social response designed to welcome elderly people who need continuous support to ensure their well-being and quality of life. This space offers a familiar and safe environment, promoting comfort and dignity for its residents.",
                "The main objectives of S. Lourenço Home include:",
                "• Provide health care, hygiene, and nutrition adapted to the individual needs of each resident;",
                "• Promote social interaction and integration through recreational, cultural, and leisure activities;",
                "• Ensure a welcoming and safe environment, ensuring quality of life and respect for each person's individuality;",
                "• Support families by offering them peace of mind knowing their loved ones are in good hands.",
                "With a team of qualified and dedicated professionals, S. Lourenço Home is more than a care facility: it is a home where care, attention, and respect are at the center of all actions."
            ]
        },
        image: lar,
    },

    HOUSECARE: {
        topImage: housecareTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "Apoio Domiciliário", en: "Home Care" }, 
                link: "/apoio_domiciliario" 
            },
        ],
        title: {
            pt: "Apoio Domiciliário",
            en: "Home Care"
        },
        content: {
            pt: [
            "O Serviço de Apoio Domiciliário (SAD) do Centro Social de Ermesinde é uma resposta social dedicada ao apoio individualizado a pessoas idosas ou dependentes, assegurando-lhes o conforto, a dignidade e a qualidade de vida no seu próprio lar. Este serviço é essencial para quem necessita de cuidados específicos no dia a dia, mas deseja manter a sua independência no ambiente familiar.",
            "Os principais objetivos do Apoio Domiciliário incluem:",
            "• Garantir o bem-estar e a segurança dos utentes, proporcionando cuidados de higiene, alimentação e conforto de forma personalizada e atenta;",
            "• Promover a autonomia e a qualidade de vida, adaptando os serviços às necessidades específicas de cada pessoa;",
            "• Facilitar a permanência no domicílio, prevenindo ou adiando a necessidade de institucionalização;",
            "• Apoiar as famílias e cuidadores, oferecendo-lhes suporte nas suas responsabilidades diárias e aliviando a sobrecarga emocional e física.",
            "Com uma equipa de profissionais qualificados e dedicados, o Apoio Domiciliário do Centro Social de Ermesinde garante uma resposta de proximidade, eficiência e humanismo, contribuindo para que cada utente viva com conforto e dignidade, rodeado dos seus afetos e memórias."
        ],
            en: [
                "The Home Care Service (SAD) of Ermesinde Social Center is a social response dedicated to individualized support for elderly or dependent people, ensuring their comfort, dignity, and quality of life in their own home. This service is essential for those who need specific daily care but wish to maintain their independence in the family environment.",
                "The main objectives of Home Care include:",
                "• Ensure the well-being and safety of users, providing hygiene, nutrition, and comfort care in a personalized and attentive way;",
                "• Promote autonomy and quality of life, adapting services to the specific needs of each person;",
                "• Facilitate staying at home, preventing or delaying the need for institutionalization;",
                "• Support families and caregivers, offering them support in their daily responsibilities and relieving emotional and physical burden.",
                "With a team of qualified and dedicated professionals, the Home Care of Ermesinde Social Center ensures a response of proximity, efficiency, and humanism, contributing to each user living with comfort and dignity, surrounded by their affections and memories."
            ]
        },
        image: housecare,
    },

    EMPLOYEMENT_SERVICE: {
        topImage: feTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "Formação e Emprego", en: "Training and Employment" }, 
                link: "/formacao_e_emprego" 
            },
        ],
        title: {
            pt: "Formação e Emprego",
            en: "Training and Employment"
        },
        content: {
            pt: [
            "O Serviço de Formação e Emprego do Centro Social de Ermesinde é uma resposta social orientada para a capacitação e a promoção da empregabilidade, visando apoiar pessoas em situação de exclusão ou vulnerabilidade económica e social. Este serviço desempenha um papel essencial na criação de oportunidades para o desenvolvimento pessoal, profissional e social dos seus beneficiários.",
            "Os principais objetivos do Serviço de Formação e Emprego incluem:",
            "• Oferecer ações de formação profissional ajustadas às necessidades do mercado de trabalho, promovendo a aquisição de competências técnicas e práticas;",
            "• Apoiar na integração no mercado de trabalho, proporcionando orientação vocacional e acompanhamento personalizado;",
            "• Incentivar o empreendedorismo e a criação de negócios próprios, oferecendo suporte técnico e informação relevante;",
            "• Contribuir para a autonomia económica e social dos beneficiários, promovendo a sua inclusão ativa na sociedade.",
            "Com uma equipa dedicada e especializada, o Serviço de Formação e Emprego do Centro Social de Ermesinde é um espaço de transformação e oportunidades, onde cada pessoa é encorajada a desenvolver o seu potencial e a construir um futuro melhor."
        ],
            en: [
                "The Training and Employment Service of Ermesinde Social Center is a social response oriented towards capacity building and promotion of employability, aiming to support people in situations of exclusion or economic and social vulnerability. This service plays an essential role in creating opportunities for personal, professional and social development of its beneficiaries.",
                "The main objectives of the Training and Employment Service include:",
                "• Offer professional training actions adjusted to labor market needs, promoting the acquisition of technical and practical skills;",
                "• Support integration into the labor market, providing vocational guidance and personalized monitoring;",
                "• Encourage entrepreneurship and creation of own businesses, offering technical support and relevant information;",
                "• Contribute to the economic and social autonomy of beneficiaries, promoting their active inclusion in society.",
                "With a dedicated and specialized team, the Training and Employment Service of Ermesinde Social Center is a space of transformation and opportunities, where each person is encouraged to develop their potential and build a better future."
            ]
        },
        image: fe,
    },

    ESCOLHAS7G: {
        topImage: escolhas7gTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "ESCOLHAS 7G", en: "ESCOLHAS 7G" }, 
                link: "/escholhas7g" 
            },
        ],
        title: {
            pt: "ESCOLHAS 7G",
            en: "ESCOLHAS 7G"
        },
        content: {
            pt: [
            "O programa Escolhas 7G, gerido pelo Centro Social de Ermesinde, é uma iniciativa social que visa promover a inclusão e o desenvolvimento de crianças, jovens e suas famílias em situações de vulnerabilidade social. Com uma abordagem educacional e focada na comunidade, o programa busca proporcionar oportunidades de crescimento pessoal, social e cultural, com o objetivo de combater a exclusão e a desigualdade.",
            "Os principais objetivos do programa Escolhas 7G são os seguintes: Promover a inclusão social e educacional de crianças e jovens, oferecendo serviços de apoio escolar, atividades culturais e desportivas para apoiar o seu desenvolvimento integral; Apoiar as famílias na superação de desafios sociais e económicos, fornecendo recursos e orientações para melhorar a sua qualidade de vida e fortalecer a coesão familiar; Incentivar a cidadania ativa e a responsabilidade social, promovendo atividades que sensibilizem os jovens para os direitos humanos, voluntariado e respeito pelos outros; Colaborar com a comunidade local, estabelecendo parcerias e redes de apoio que contribuam para a melhoria das condições de vida e integração social dos participantes.",
            "Com uma equipa multidisciplinar e uma abordagem integrada, o programa Escolhas 7G do Centro Social de Ermesinde trabalha para garantir que as crianças e os jovens participantes tenham a oportunidade de construir um futuro melhor, promovendo a igualdade de oportunidades e o valor de todos os membros da comunidade."
        ],
            en: [
                "The Escolhas 7G program, managed by Ermesinde Social Center, is a social initiative aimed at promoting the inclusion and development of children, youth and their families in situations of social vulnerability. With an educational and community-focused approach, the program seeks to provide opportunities for personal, social and cultural growth, with the aim of combating exclusion and inequality.",
                "The main objectives of the Escolhas 7G program are: To promote social and educational inclusion of children and youth, offering school support services, cultural and sports activities to support their integral development; Support families in overcoming social and economic challenges, providing resources and guidance to improve their quality of life and strengthen family cohesion; Encourage active citizenship and social responsibility, promoting activities that raise awareness among young people about human rights, volunteering and respect for others; Collaborate with the local community, establishing partnerships and support networks that contribute to improving living conditions and social integration of participants.",
                "With a multidisciplinary team and an integrated approach, the Escolhas 7G program of Ermesinde Social Center works to ensure that participating children and youth have the opportunity to build a better future, promoting equal opportunities and the value of all community members."
            ]
        },
        image: escolhas7g,
    },

    SAAS: {
        topImage: saasTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "SAAS", en: "SAAS" }, 
                link: "/saas" 
            },
        ],
        title: {
            pt: "SAAS - Serviço de Atendimento e Acompanhamento Social",
            en: "SAAS - Social Service and Support"
        },
        content: {
            pt: [
            'O Serviço de Atendimento e Acompanhamento Social (SAAS) consiste num atendimento de primeira linha que responde eficazmente às situações de crise e/ou de emergência social, destinado a assegurar o apoio técnico, tendo em vista a prevenção e resolução de problemas sociais. O SAAS é um serviço que assegura o atendimento e o acompanhamento de pessoas e famílias em situação de vulnerabilidade e exclusão social, bem como de emergência social.',
            'No SAAS dinamizamos atividades de atendimento e acompanhamento social conforme as situações com que a equipa se depara. Pretende-se uma resposta descentralizada e próxima através de uma intervenção multidisciplinar, articulada e célere, potenciando uma ação concertada dos diversos organismos e entidades envolvidos. A cada família é atribuído um técnico de atendimento/acompanhamento para um atendimento personalizado, evitando respostas fragmentadas e a duplicação de intervenções.',
            'O atendimento decorre nas instalações do Centro de Animação das Saibreiras, sito na Travessa João de Deus, 261 em Ermesinde.',
                'Temos como principal fim a promoção das condições de inclusão e integração social da população da freguesia de Ermesinde, particularmente aqueles que se encontram em situação de vulnerabilidade/fragilidade por razões de pobreza, deficiência, risco social ou familiar ou de difícil acesso ao emprego.'
            ],
            en: [
                'The Social Service and Support (SAAS) consists of a first-line service that effectively responds to crisis situations and/or social emergencies, aimed at ensuring technical support for the prevention and resolution of social problems. SAAS is a service that ensures the care and monitoring of people and families in situations of vulnerability and social exclusion, as well as social emergency.',
                'At SAAS, we organize service and social monitoring activities according to the situations the team encounters. The aim is to provide a decentralized and close response through a multidisciplinary, articulated and swift intervention, enhancing coordinated action by the various organizations and entities involved. Each family is assigned a service/monitoring technician for personalized care, avoiding fragmented responses and duplication of interventions.',
                'The service takes place at the Saibreiras Animation Center, located at Travessa João de Deus, 261 in Ermesinde.',
                'Our main purpose is to promote conditions for social inclusion and integration of the population of Ermesinde parish, particularly those who are in situations of vulnerability/fragility due to poverty, disability, social or family risk, or difficult access to employment.'
            ]
        },
        image: saas,
    },

    YOUTH_EXCHANGE: {
        topImage: youthExchangeTop,
        image: youthExchange,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "Intercâmbio Jovem", en: "Youth Exchange" }, 
                link: "/youth_exchange" 
            },
        ],
        title: {
            pt: "Intercâmbio Jovem",
            en: "Youth Exchange"
        },
        content: {
            pt: [
                'O programa de Intercâmbio Jovem, em colaboração com o Centro Social de Ermesinde, visa promover o intercâmbio cultural, o crescimento pessoal e a inclusão social entre jovens de diferentes origens.',
                'Como instituição socialmente comprometida, o Centro Social de Ermesinde participa ativamente em iniciativas que capacitam os jovens, proporcionando oportunidades de aprendizagem, desenvolvimento de competências e experiências interculturais.',
                'Esta iniciativa inclui workshops, projetos de voluntariado, eventos culturais e atividades baseadas na comunidade, permitindo que os jovens desenvolvam novas perspectivas enquanto contribuem para causas sociais significativas.',
                'Ao acolher participantes internacionais e locais, o Centro Social de Ermesinde fortalece seu papel como ponte entre culturas, promovendo um sentido de cidadania global e compreensão mútua.',
                'Ao integrar o Intercâmbio Jovem em seus projetos sociais, o Centro Social de Ermesinde não só enriquece a vida dos jovens, mas também reforça seu compromisso com o desenvolvimento social, educacional e cultural.'
            ],
            en: [
                'The Youth Exchange program, in collaboration with the Ermesinde Social Center, aims to foster cultural exchange, personal growth, and social inclusion among young people from different backgrounds.',
                'As a socially committed institution, the Ermesinde Social Center actively participates in initiatives that empower youth by providing opportunities for learning, skill development, and intercultural experiences.',
                'This initiative includes workshops, volunteer projects, cultural events, and community-based activities, allowing young people to develop new perspectives while contributing to meaningful social causes.',
                'By welcoming international and local participants, the Ermesinde Social Center strengthens its role as a bridge between cultures, fostering a sense of global citizenship and mutual understanding.',
                'By integrating Youth Exchange into its social projects, the Ermesinde Social Center not only enriches the lives of young people but also enhances its commitment to social, educational, and cultural development.'
            ]
        }
    },

    MOVE: {
        topImage: moveTop,
        image: move,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "Projeto MOVE", en: "MOVE Project" }, 
                link: "/move" 
            },
        ],
        title: {
            pt: "Projeto MOVE",
            en: "MOVE Project"
        },
        content: {
            pt: [
                'O Projeto MOVE, em parceria com o Centro Social de Ermesinde, dedica-se à promoção da inclusão social, desenvolvimento pessoal e participação ativa através de oportunidades de mobilidade e aprendizagem.',
                'Como parte do seu compromisso contínuo com o apoio e capacitação da comunidade, o Centro Social de Ermesinde integra o Projeto MOVE nas suas iniciativas, oferecendo a jovens e adultos a oportunidade de participar em experiências dinâmicas que melhoram suas habilidades, empregabilidade e consciência cultural. Através de sessões de formação, workshops e atividades práticas, os participantes adquirem conhecimentos valiosos em áreas como empreendedorismo, responsabilidade social e trabalho em equipe.',
                'Ao facilitar oportunidades de mobilidade, o Projeto MOVE permite que os indivíduos explorem novos ambientes, troquem ideias e desenvolvam uma perspectiva mais ampla sobre os desafios sociais e econômicos. Esta iniciativa alinha-se com a missão do Centro Social de Ermesinde de melhorar a qualidade de vida da comunidade local, promovendo a educação, cooperação e crescimento profissional.',
                'Através da sua colaboração com o Projeto MOVE, o Centro Social de Ermesinde continua a criar experiências impactantes que capacitam indivíduos, fortalecem os laços comunitários e contribuem para uma sociedade mais inclusiva e engajada.'
            ],
            en: [
                'The MOVE Project, in partnership with the Ermesinde Social Center, is dedicated to promoting social inclusion, personal development, and active participation through mobility and learning opportunities.',
                'As part of its ongoing commitment to community support and empowerment, the Ermesinde Social Center integrates the MOVE Project into its initiatives, offering young people and adults the chance to engage in dynamic experiences that enhance their skills, employability, and cultural awareness. Through training sessions, workshops, and hands-on activities, participants gain valuable knowledge in areas such as entrepreneurship, social responsibility, and teamwork.',
                'By facilitating mobility opportunities, the MOVE Project allows individuals to explore new environments, exchange ideas, and develop a broader perspective on social and economic challenges. This initiative aligns with the Ermesinde Social Center\'s mission to improve the quality of life for the local community, fostering education, cooperation, and professional growth.',
                'Through its collaboration with the MOVE Project, the Ermesinde Social Center continues to create impactful experiences that empower individuals, strengthen community bonds, and contribute to a more inclusive and engaged society.'
            ]
        }
    },

    CLDS4G: {
        topImage: Clds4gTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "CLDS4G", en: "CLDS4G" }, 
                link: "/clds4g" 
            },
        ],
        title: {
            pt: "CLDS4G",
            en: "CLDS4G"
        },
        subtitle: {
            pt: "Centro Social de Ermesinde coordena o programa da quarta geração do Contrato Local de Desenvolvimento Social (CLDS4G), projeto VALER.",
            en: "Ermesinde Social Center coordinates the fourth generation program of the Local Social Development Contract (CLDS4G), VALER project."
        },
        description: {
            pt: "O projeto foi criado pela portaria nº229/2018, de 14 de agosto e é cofinanciado pela UE no âmbito da tipologia de operações 3.10 do Programa Operacional Inclusão Social e Emprego (POISE).",
            en: "The project was created by ordinance No. 229/2018, of August 14, and is co-financed by the EU under the typology of operations 3.10 of the Operational Program for Social Inclusion and Employment (POISE)."
        },
        objective: {
            main: {
                pt: "Promover a inclusão social e combater a pobreza da população das freguesias de Valongo e Ermesinde.",
                en: "Promote social inclusion and combat poverty among the population of Valongo and Ermesinde parishes."
            },
            axes: [
                {
                    title: {
                        pt: "Eixo 1 – emprego, formação e qualificação",
                        en: "Axis 1 – employment, training and qualification"
                    },
                    items: {
                        pt: [
                        "Espaço Emprego e Formação: Atendimento e encaminhamento de jovens e adultos desempregados/as para ofertas de emprego e de formação.",
                        "Espaço Empreendedorismo: Divulgação de programas de apoio ao auto-emprego e sensibilização para a criação de produtos vendáveis através de matéria prima reutilizável."
                        ],
                        en: [
                            "Employment and Training Space: Service and referral of unemployed youth and adults to job and training offers.",
                            "Entrepreneurship Space: Dissemination of self-employment support programs and awareness for creating saleable products through reusable raw materials."
                        ]
                    }
                },
                {
                    title: {
                        pt: "Eixo 2 – intervenção familiar e parental, preventiva da pobreza infantil",
                        en: "Axis 2 – family and parental intervention, preventive of child poverty"
                    },
                    items: {
                        pt: [
                        "Espaço Cidadania: Apoio no acesso online aos serviços públicos.",
                        "Espaço Família: Acompanhamento de famílias e promoção de competências parentais."
                        ],
                        en: [
                            "Citizenship Space: Support in online access to public services.",
                            "Family Space: Family support and promotion of parenting skills."
                    ]
                    }
                }
            ]
        },
        contacts: [
            { type: "Phone", label: "Geral", number: "932212342", link: "tel:229747194", color: "info" },
            { type: "Phone", label: "Espaço Emprego e Formação", number: "932213343 | 932213203", link: "tel:229747194", color: "success" },
            { type: "Phone", label: "Espaço Cidadania, Empreendedorismo e Família", number: "932213069 | 932006230", link: "tel:229747194", color: "info" },
            { type: "Email", label: "clds4g@cse.pt", link: "mailto:clds4g@cse.pt", color: "warning" }
        ],

        working_hours: [
            { type: "Location", label: "Valongo", secondary: "(Fórum Vallis Longus)", color: "warning" },
            { type: "Location", label: "Ermesinde", secondary: "(Centro de Formação e Emprego do CSE)", color: "info" },
            { type: "Time", label: "Segunda a Sexta", secondary: "9h às 13h e das 14h às 17h", link: "mailto:@cse.pt", color: "success" },
            { type: "Link", label: "Facebook", link: "https://www.facebook.com/centrosocialdeermesinde/", color: "info" }
        ],

        image: {
            logo: logo,
            logo1: logo1,
            logo2: logo2,
            logo3: logo3,
            logo4: logo4,
        },

        gallery: [
            {
                src: cldsImage,
                alt: "gallery-img 1",
                category: "nature",
            },
            {
                src: cldsImage1,
                alt: "gallery-img 2",
                category: "charity",
            },
            {
                src: cldsImage2,
                alt: "gallery-img 3",
                category: "nature",
            },
            {
                src: cldsImage3,
                alt: "gallery-img 4",
                category: "charity",
            }
        ]
    },

    E2OV: {
        topImage: e2ovTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "E2OV", en: "E2OV" }, 
                link: "/e2ov" 
            },
        ],
        title: {
            pt: "E2OV",
            en: "E2OV"
        },
        content: {
            pt: [
            "O programa E2OV, gerido pelo Centro Social de Ermesinde, é uma iniciativa social que visa promover a inclusão e o desenvolvimento de crianças, jovens e suas famílias em situações de vulnerabilidade social. O programa foca-se na criação de oportunidades para o crescimento pessoal, social e cultural, a fim de combater a exclusão e a desigualdade.",
            "Os principais objetivos do programa E2OV incluem:",
            "• Promover a inclusão social e educacional de crianças e jovens, oferecendo serviços de apoio escolar, atividades culturais e desportivas para melhorar o seu desenvolvimento integral;",
            "• Apoiar as famílias na superação de desafios sociais e económicos, fornecendo recursos e orientação para melhorar a sua qualidade de vida e fortalecer a coesão familiar;",
            "• Incentivar a cidadania ativa e a responsabilidade social através de atividades que sensibilizem para os direitos humanos, voluntariado e respeito pelos outros;",
            "• Colaborar com a comunidade local, estabelecendo parcerias e redes de apoio para melhorar as condições de vida e a integração social dos participantes.",
            "Com uma equipa multidisciplinar e uma abordagem abrangente, o programa E2OV garante que as crianças e os jovens tenham acesso às oportunidades necessárias para construir um futuro melhor, promovendo a igualdade e valorizando cada indivíduo na comunidade."
        ],
            en: [
                "The E2OV program, managed by Centro Social de Ermesinde, is a social initiative aimed at promoting the inclusion and development of children, young people and their families in situations of social vulnerability. The program focuses on creating opportunities for personal, social and cultural growth, in order to combat exclusion and inequality.",
                "The main objectives of the E2OV program include:",
                "• Promote social and educational inclusion of children and young people, offering school support services, cultural and sports activities to improve their integral development;",
                "• Support families in overcoming social and economic challenges, providing resources and guidance to improve their quality of life and strengthen family cohesion;",
                "• Encourage active citizenship and social responsibility through activities that raise awareness of human rights, volunteering and respect for others;",
                "• Collaborate with the local community, establishing partnerships and support networks to improve living conditions and social integration of participants.",
                "With a multidisciplinary team and a comprehensive approach, the E2OV program ensures that children and young people have access to the opportunities needed to build a better future, promoting equality and valuing each individual in the community."
            ]
        },
        image: e2ov,
    },

    CONTACTS: {
        topImage: history,
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "Contacts", link: "/contactos" },
        ]
    },

    COFINANCIADOS: {
        topImage: cofinanciadosTop,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "Projectos Cofinanciados", en: "Co-financed Projects" }, 
                link: "/cofinanciados" 
            },
        ],
        title: {
            pt: "Projectos Cofinanciados",
            en: "Co-financed Projects"
        },
        projects: [
            {
                title: {
                    pt: "Programa Norte 2020",
                    en: "North 2020 Program"
                },
                description: {
                    pt: "Apoio a projetos sociais e de desenvolvimento na região do Norte.",
                    en: "Support for social and development projects in the Northern region."
                },
                image: logo1,
                link: "http://norte2020.pt/",
            },
            {
                title: {
                    pt: "Portugal 2020",
                    en: "Portugal 2020"
                },
                description: {
                    pt: "Iniciativas de cofinanciamento para o desenvolvimento regional.",
                    en: "Co-financing initiatives for regional development."
                },
                image: logo2,
                link: "https://www.portugal2020.pt/",
            },
            {
                title: {
                    pt: "UE FSE",
                    en: "EU ESF"
                },
                description: {
                    pt: "Fundo Social Europeu para promover a inclusão social.",
                    en: "European Social Fund to promote social inclusion."
                },
                image: logo3,
                link: "https://ec.europa.eu/esf/home.jsp",
            },
        ],
        projectFile: {
            pt: "Ficha do Projecto",
            en: "Project File"
        },
        button: {
            pt: "Saiba mais",
            en: "Learn more"
        }
    },

    CENTRO_QUALIFICA: {
        topImage: logoQualifica,
        breadcrumbs: [
            { 
                label: { pt: "Home", en: "Home" }, 
                link: "/home" 
            },
            { 
                label: { pt: "Centro Qualifica", en: "Qualifica Center" }, 
                link: "/centro_qualifica" 
            },
        ],
        title: {
            pt: "Centro Qualifica do Centro Social de Ermesinde",
            en: "Qualifica Center of Ermesinde Social Center"
        },
        description: {
            pt: "O Centro qualifica do Centro Social de Ermesinde foi criado em maio de 2020 e iniciou a sua atividade no dia 01-06-2020, visa elevar o nível de qualificação da população adulta e reforçar a orientação dos/as jovens que não frequentam qualquer ação de educação ou de formação nem estão empregados (NEET).",
            en: "The Qualifica Center of Ermesinde Social Center was created in May 2020 and started its activity on 06-01-2020, aiming to raise the qualification level of the adult population and strengthen the guidance of young people who are not in education, employment, or training (NEET)."
        },
        objectives: {
            pt: [
            "Aumentar os níveis de qualificação e melhorar a empregabilidade dos ativos, dotando-os de competências ajustadas às necessidades do mercado de trabalho.",
            "Reduzir significativamente as taxas de analfabetismo, literal e funcional, combatendo igualmente o semianalfabetismo e iletrismo.",
            "Valorizar o sistema, promovendo um maior investimento dos jovens adultos em percursos de educação e formação.",
            "Corrigir o atraso estrutural do país em matéria de escolarização no sentido de uma maior convergência com a realidade europeia.",
            "Adequar a oferta e a rede formativa às necessidades do mercado de trabalho e aos modelos de desenvolvimento nacionais e regionais."
        ],
            en: [
                "Increase qualification levels and improve employability of active workers by providing skills adjusted to labor market needs.",
                "Significantly reduce literal and functional illiteracy rates, while also combating semi-literacy and illiteracy.",
                "Enhance the system by promoting greater investment of young adults in education and training paths.",
                "Correct the country's structural delay in schooling towards greater convergence with European reality.",
                "Adapt the training offer and network to labor market needs and national and regional development models."
            ]
        },
        targetAudience: {
            pt: [
            "Adultos (com mais de 18 anos) que pretendam adquirir, reforçar ou ver reconhecidos os conhecimentos e competências que desenvolveram ao longo da vida.",
            "Jovens (com mais de 15 anos) que não se encontrem a frequentar modalidades de educação ou de formação e que não estejam inseridos no mercado de trabalho."
        ],
            en: [
                "Adults (over 18 years old) who wish to acquire, strengthen or have recognized the knowledge and skills they developed throughout their lives.",
                "Young people (over 15 years old) who are not attending education or training and are not in the labor market."
            ]
        },
        contactInfo: {
            address: "Largo António da Silva Moreira, 921 – 4445-280 Ermesinde",
            email: "csermesinde@centroqualifica.gov.pt",
            phone: "937709015 | 937715391",
            facebook: "https://www.facebook.com/centrosocialdeermesinde/"
        },
        headers: {
            objectives: {
                pt: "Objectivos",
                en: "Objectives"
            },
            targetAudience: {
                pt: "Destinatários",
                en: "Target Audience"
            },
            contactInfo: {
                pt: "Informações de Contato",
                en: "Contact Information"
            },
            videos: {
                pt: "Vídeos",
                en: "Videos"
            },
            address: {
                pt: "Endereço",
                en: "Address"
            },
            phone: {
                pt: "Telefone",
                en: "Phone"
            }
        },
        button: {
            pt: "Inscrição Centro Qualifica",
            en: "Qualifica Center Registration"
        }
    },

    CONTACT: {
        title: {
            pt: "Contacto",
            en: "Contact"
        },
        subtitle: {
            pt: "Utilize o nosso formulário para entrar em contacto connosco",
            en: "Use our form to get in touch with us"
        },
        form: {
            name: {
                label: {
                    pt: "Nome (opcional)",
                    en: "Name (optional)"
                }
            },
            email: {
                label: {
                    pt: "Email",
                    en: "Email"
                }
            },
            message: {
                label: {
                    pt: "Mensagem",
                    en: "Message"
                }
            },
            privacy: {
                text: {
                    pt: "Li e aceito a",
                    en: "I have read and accept the"
                },
                link: {
                    pt: "Politica de Privacidade",
                    en: "Privacy Policy"
                }
            },
            submit: {
                pt: "Enviar Mensagem",
                en: "Send Message"
            }
        },
        contact: {
            address: {
                pt: "Rua Rodrigues de Freitas, 2200 4445-637 Ermesinde",
                en: "Rua Rodrigues de Freitas, 2200 4445-637 Ermesinde"
            },
            email: "geral@cse.pt",
            phone: {
                number: "229747194",
                info: {
                    pt: "(Chamada para a rede fixa nacional)",
                    en: "(Call to national landline)"
                }
            }
        },
        messages: {
            required: {
                pt: "Por favor, preencha todos os campos obrigatórios.",
                en: "Please fill in all required fields."
            },
            success: {
                pt: "Sua mensagem foi enviada. Entraremos em contato com você por e-mail em breve.",
                en: "Your message has been sent. We will contact you by email soon."
            },
            error: {
                pt: "Erro ao enviar a mensagem. Tente novamente.",
                en: "Error sending message. Please try again."
            }
        }
    },

    MENU: {
        home: {
            name: {
                pt: "Página Inicial",
                en: "Home"
            }
        },
        institution: {
            name: {
                pt: "Instituição",
                en: "Institution"
            },
            items: [
                {
                    pt: "História",
                    en: "History"
                },
                {
                    pt: "Órgãos Sociais",
                    en: "Social Bodies"
                },
                {
                    pt: "Organograma",
                    en: "Organization Chart"
                },
                {
                    pt: "Política da Qualidade",
                    en: "Quality Policy"
                },
                {
                    pt: "Documentos Institucionais",
                    en: "Institutional Documents"
                }
            ]
        },
        socialServices: {
            name: {
                pt: "Respostas Sociais",
                en: "Social Services"
            },
            items: [
                {
                    pt: "Jardim Infância",
                    en: "Kindergarten"
                },
                {
                    pt: "Creche",
                    en: "Nursery"
                },
                {
                    pt: "CATL",
                    en: "CATL"
                },
                {
                    pt: "Lar S. Lourenço",
                    en: "S. Lourenço Home"
                },
                {
                    pt: "Apoio Domiciliário",
                    en: "Home Care"
                },
                {
                    pt: "Formação e Emprego",
                    en: "Training and Employment"
                }
            ]
        },
        projects: {
            name: {
                pt: "Projetos",
                en: "Projects"
            },
            items: [
                {
                    pt: "ESCOLHAS 7G",
                    en: "ESCOLHAS 7G"
                },
                {
                    pt: "SAAS",
                    en: "SAAS"
                },
                {
                    pt: "CLDS4G",
                    en: "CLDS4G"
                },
                {
                    pt: "Intercâmbio Jovem",
                    en: "Youth Exchange"
                },
                {
                    pt: "Cofinanciados",
                    en: "Co-financed"
                },
                {
                    pt: "Projeto MOVE",
                    en: "MOVE Project"
                }
            ]
        },
        education: {  // New section
            name: {
                pt: "Educação Formação",
                en: "Education Training"
            },
            items: [
                {
                    pt: "E2OV",
                    en: "E2OV"
                },
                {
                    pt: "Centro Qualifica",
                    en: "Qualification Center"
                }
            ]
        },
        services: {
            name: {
                pt: "Serviços",
                en: "Services"
            },
            items: [
                {
                    pt: "Administrativos",
                    en: "Administrative"
                }
            ]
        },
        contacts: {
            name: {
                pt: "Contactos",
                en: "Contacts"
            }
        },
        login: {
            name: {
                pt: "Entrar",
                en: "Login"
            }
        },
        register: {
            name: {
                pt: "Criar Conta",
                en: "Create Account"
            }
        },
        logout: {
            name: {
                pt: "Sair",
                en: "Log out"
            }
        },
        welcome:{
            name: {
                pt: "Bem-vindo,",
                en: "Welcome,"
            }
        }
    },

    AUTH: {
        login: {
            title: {
                pt: "Login",
                en: "Login"
            },
            email: {
                label: {
                    pt: "Email",
                    en: "Email"
                },
                error: {
                    pt: "Por favor insira um email válido",
                    en: "Please enter a valid email"
                }
            },
            password: {
                label: {
                    pt: "Password",
                    en: "Password"
                },
                error: {
                    pt: "A password deve ter pelo menos 6 caracteres",
                    en: "Password must be at least 6 characters"
                }
            },
            buttons: {
                login: {
                    pt: "Entrar",
                    en: "Login"
                },
                register: {
                    pt: "Registar",
                    en: "Register"
                },
                cancel: {
                    pt: "Cancelar",
                    en: "Cancel"
                }
            },
            errors: {
                invalidCredentials: {
                    pt: "Email ou password inválidos",
                    en: "Invalid email or password"
                }
            },
            successMessage: {
                pt: "Login realizado com sucesso!",
                en: "Login successful!"
            }
        },
        register: {
            title: {
                pt: "Criar Conta",
                en: "Create Account"
            },
            name: {
                label: {
                    pt: "Nome",
                    en: "Name"
                },
                error: {
                    pt: "Por favor insira um nome válido",
                    en: "Please enter a valid name"
                }
            },
            email: {
                label: {
                    pt: "Email",
                    en: "Email"
                },
                error: {
                    pt: "Por favor insira um email válido",
                    en: "Please enter a valid email"
                }
            },
            password: {
                label: {
                    pt: "Password",
                    en: "Password"
                },
                error: {
                    pt: "A password deve ter pelo menos 6 caracteres",
                    en: "Password must be at least 6 characters"
                }
            },
            confirmPassword: {
                label: {
                    pt: "Confirmar Password",
                    en: "Confirm Password"
                },
                error: {
                    pt: "As passwords não coincidem",
                    en: "Passwords do not match"
                }
            },
            buttons: {
                login: {
                    pt: "Entrar",
                    en: "Login"
                },
                register: {
                    pt: "Registar",
                    en: "Register"
                },
                cancel: {
                    pt: "Cancelar",
                    en: "Cancel"
                }
            }
        },
        verification: {
            title: {
                pt: "Verificação de Email",
                en: "Email Verification"
            },
            message: {
                pt: "Por favor verifique o seu email para ativar a sua conta.",
                en: "Please check your email to activate your account."
            },
            buttons: {
                close: {
                    pt: "Fechar",
                    en: "Close"
                }
            }
        },
        forgot_password: {
            title: {
                pt: "Redefinir Senha",
                en: "Reset Password"
            },
            email: {
                label: {
                    pt: "Email",
                    en: "Email"
                },
                error: {
                    required: {
                        pt: "Email é obrigatório",
                        en: "Email is required"
                    },
                    invalid: {
                        pt: "Por favor insira um email válido",
                        en: "Please enter a valid email"
                    }
                }
            },
            button: {
                pt: "Enviar Link de Redefinição",
                en: "Send Reset Link"
            },
            success: {
                pt: "Email de redefinição de senha enviado! Verifique sua caixa de entrada.",
                en: "Password reset email sent! Check your inbox."
            },
            link: {
                pt: "Esqueceu a senha?",
                en: "Forgot password?"
            }
        }
    },

    // Add to Features.ts
    FOOTER: {
        description: {
            pt: "O Centro Social de Ermesinde é uma IPSS do concelho de Valongo que promove o bem-estar com a comunidade desde a sua fundação, a 15 de fevereiro de 1955.",
            en: "The Ermesinde Social Center is an IPSS in Valongo municipality that promotes well-being with the community since its foundation on February 15, 1955."
        },
        sections: {
            usefulLinks: {
                title: {
                    pt: "Ligações úteis",
                    en: "Useful Links"
                },
                links: [
                    {
                        label: {
                            pt: "Jornal a Voz de Ermesinde",
                            en: "Ermesinde Voice Newspaper"
                        },
                        link: "http://www.avozdeermesinde.com/"
                    },
                    {
                        label: {
                            pt: "Parceiros",
                            en: "Partners"
                        },
                        link: "index.html"
                    },
                    {
                        label: {
                            pt: "Rádio Zona Z",
                            en: "Radio Zone Z"
                        },
                        link: "https://www.facebook.com/zonazcomunitaria/"
                    },
                    {
                        label: {
                            pt: "Galeria",
                            en: "Gallery"
                        },
                        link: "index.html"
                    }
                ]
            },
            highlights: {
                title: {
                    pt: "Destaques",
                    en: "Highlights"
                },
                links: [
                    {
                        label: {
                            pt: "Politica de Privacidade",
                            en: "Privacy Policy"
                        },
                        link: "politica_privacidade.html"
                    },
                    {
                        label: {
                            pt: "Contactos",
                            en: "Contacts"
                        },
                        link: "contactos.html"
                    },
                    {
                        label: {
                            pt: "Quem somos",
                            en: "About Us"
                        },
                        link: "about-us.html"
                    },
                    {
                        label: {
                            pt: "Recrutamento",
                            en: "Recruitment"
                        },
                        link: "mailto:recrutamento@cse.pt"
                    }
                ]
            },
            newsletter: {
                title: {
                    pt: "Newsletter",
                    en: "Newsletter"
                },
                description: {
                    pt: "Mantenha-se informado sobre as novidades e atividades do Centro Social de Ermesinde",
                    en: "Stay informed about news and activities of the Ermesinde Social Center"
                }
            }
        }
    },

    PASSWORD_VALIDATOR: {
        requirements: {
            length: {
                pt: "Pelo menos 10 caracteres",
                en: "At least 10 characters"
            },
            specialChar: {
                pt: "Contém um caractere especial",
                en: "Contains a special character"
            }
        }
    },

    LOGIN: {
        // ... other login texts
        forgotPassword: {
            pt: "Esqueceu a senha?",
            en: "Forgot password?"
        },
        // ... other login texts
    },

    

    
};

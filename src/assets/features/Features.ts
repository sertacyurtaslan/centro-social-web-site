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

export const Features = {

    //---------HOME SCREEN FEATURES---------//
    CAROUSEL: [
         {
            mainText: "Infância e Juventude",
            subText: "\"Tudo é possível para um coração cheio de vontade.\"",
            textPlacement: "25%"
        },
        {
            mainText: "Jardim Infância",
            subText: "“A criança está no centro da nossa ação”",
            textPlacement: "50%"
        },
        {
            mainText: "Lar S. Lourenço",
            subText: "Apoiar o idoso a sentir-se útil e válido na comunidade onde vive.",
            textPlacement: "50%"
        },
        {
            mainText: "Creche e Creche Familiar",
            subText: "Aqueles que passam por nós, não vão sós, deixam um pouco de si, levam um pouco de nós.\"\nExupéry",
            textPlacement: "50%"
        }
    ],

    CARD_ITEMS: [
        {
            href: "#courses",
            color: Color.yellow.main,
            icon: Article,
            title: "Projectos"
        },
        {
            href: "#agenda",
            color: Color.green.main,
            icon: CalendarToday,
            title: "Agenda"
        },
        {
            href: "#galeria",
            color: Color.red.main,
            icon: Photo,
            title: "Galeria"
        },
        {
            href: "#noticias",
            color: Color.blue.main,
            icon: Folder,
            title: "Noticias"
        },
    ],

    FIRST_PARALLAX: {
        title: "Convocatória Assembleia Geral",
        subTitle: "Discussão e votação do Relatório e Contas relativo ao exercício de 2023",
        buttonText: "VER MAIS",
        buttonLink: "documentos_institucionais.html",
    },

    SOCIAL_RESPONSES: [
        {
            icon: Work,
            color: Color.yellow.main,
            title: "FORMAÇÃO EMPREGO",
            text: "O Centro de Formação e Emprego (CFE) é uma valência do CSE, certificado pela DGERT (Direção Geral do Emprego e das Relações de Trabalho), que foi criado em 2003..."
        },
        {
            icon: ChildCare,
            color: Color.green.main,
            title: "JARDIM INFÂNCIA",
            text: "O jardim-de-infância do Centro Social de Ermesinde é um espaço organizado e estimulante preparado exclusivamente para crianças dos 3 aos 6 anos..."
        },
        {
            icon: BabyChangingStation,
            color: Color.red.main,
            title: "CRECHE",
            text: "A Creche proporciona um atendimento individualizado às crianças que acolhe (dos 4 meses aos 3 anos) numa atmosfera de segurança e conforto: físico e afetivo..."
        },
        {
            icon: BabyChangingStation,
            color: Color.blue.main,
            title: "CRECHE FAMILIAR",
            text: "Nasce uma criança… E este acontecimento marca de forma profunda a vida de qualquer progenitor, tanto pelas alegrias que vão acumular daí para o futuro..."
        },
        {
            icon: Elderly,
            color: Color.purple.main,
            title: "LAR S. LOURENÇO",
            text: "O Lar S. Lourenço é um equipamento que constitui uma resposta social desenvolvida em alojamento colectivo, de utilização temporária ou permanente..."
        },
        {
            icon: Elderly,
            color: Color.pink.main,
            title: "APOIO DOMICILIARIO",
            text: "O Serviço de Apoio Domiciliário consiste na prestação de cuidados individualizados e personalizados no domicílio, a idosos, adultos ou famílias..."
        }
    ],

    PROJECTS: [
        {
            title: "Erasmus+ Project Move",
            description: "O Erasmus+ oferece a pessoas de todas as idades a possibilidade de se desenvolverem e partilharem conhecimentos e experiências...",
            image: erasmus,
            link: "http://move.cse.pt/",
            color: Color.yellow.main,
        },
        {
            title: "Centro Qualifica",
            description: "O Centro qualifica do Centro Social de Ermesinde foi criado em maio de 2020 e iniciou a sua atividade no dia 01-06-2020...",
            image: centro_qualifica,
            link: "centro_qualifica.html",
            color: Color.green.main,
        },
        {
            title: "Escola Segunda Oportunidade",
            description: "A E2OV é uma resposta socioeducativa de Valongo dirigida a jovens em absentismo e abandono escolar precoce...",
            image: escola_segunda,
            link: "https://www.facebook.com/E2OValongo/",
            color: Color.red.main,
        },
        {
            title: "ZONA Z e7g",
            description: "O projeto ZONA Z-E7G, coordenado pelo CENTRO SOCIAL DE ERMESINDE, visa desenvolver uma resposta socioeducativa...",
            image: zona_Z,
            link: "https://www.facebook.com/CSE-ZONA-Z-e7g-356132181910724/",
            color: Color.blue.main,
        },
    ],

    SECOND_PARALLAX: {
        title: "Seja solidário ajude-nos a ajudar",
        subTitle: "Dê a mão a esta causa",
        buttonText: "SABER MAIS",
        buttonLink: "documentos_institucionais.html",
    },

    COUNTERS: [
        { count: 368, label: "Crianças", bgColor: Color.yellow.main },
        { count: 161, label: "Idosos", bgColor: Color.green.main },
        { count: 126, label: "Trabalhadores", bgColor: Color.red.main },
        { count: 64, label: "Anos Existência", bgColor: Color.green.main },
    ],

    NEWS :[
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
    ],

    THIRD_PARALLAX:{
        title: "aCARRINHAr - A Social CamperVan",
        subTitle: "O Centro Social de Ermesinde, Instituição Particular de Solidariedade Social, com mais de meio século de existência e de intervenção no setor social, pretende REPARAR &ndas...",
        buttonText: "SABER MAIS",
        buttonLink: "https://ppl.pt/acarrinhar?fbclid=IwAR0j8zQ6hc3_zAFpSdP46y2GPIZS3XSjKRRdvpJNQMfQCBD_c5tfosdZgqs",
    },

    //------------HISTORY PAGE-----------//
    HISTORY: {
        topImage: historyTop,
        title: "Centro Social de Ermesinde",
        breadcrumbs: [
            { label: "Home", link: "/" },
            { label: "História", link: "/historia" },
        ],
        content: [
            "O Centro Social de Ermesinde foi fundado a 15 de fevereiro de 1955 e desempenha um importante papel de apoio social junto das populações carenciadas da freguesia.",
            "Esta instituição, de cariz eminentemente social, dedica-se à prestação serviços à comunidade, em áreas tão importantes e sensíveis como a guarda, educação e ocupação dos tempos livres de crianças (creche, jardim de infância e A.T.L.); o apoio domiciliário e residencial a idosos e a promoção social, cultural e económica de pessoas em situação de exclusão, concorrendo, assim, para a melhoria da qualidade da vida da comunidade local.",
            "Procurando sempre acompanhar as necessidades das populações locais, em particular das mais desfavorecidas, o Centro Social de Ermesinde é a única instituição da freguesia que abrange, simultânea e diretamente, todos os grupos etários, num universo de mais de 500 pessoas.",
            "O Centro Social de Ermesinde tem ao seu serviço mais de 120 trabalhadores e dispõe atualmente de 1.000 sócios contribuintes.",
        ],
        image: history,
    },

    //------------SOCIAL ORGANS PAGE-----------//
    SOCIAL_ORGANS: {
        topImage: socialOrgansTop,
        title: "Órgãos Sociais",
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "Órgãos Sociais", link: "/orgaos_sociais" },
        ],
        management: {
            mesaAssembleiaGeral: {
                title: "Mesa da Assembleia Geral",
                presidente: "Abílio Villas Boas Ribeiro",
                vicePresidente: "Catarina Maria Moreira das Neves Lobo",
                secretario: "Almiro Hermínio Teixeira Guimarães",
            },
            direcao: {
                title: "Direcção",
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
                title: "Conselho Fiscal",
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
            { label: "Home", link: "/home" },
            { label: "Política da Qualidade", link: "/politica_da_qualidade" },
        ],
        title:"Política da Qualidade",
        objective:"Objectivo: Melhorar a vida das pessoas",
        content: [
            'O Centro Social de Ermesinde (CSE) é uma Instituição Particular de Solidariedade Social (IPSS), independente, apartidária e sem fins lucrativos, com mais de meio século de existência, que tem como principal objetivo o desenvolvimento da comunidade de Ermesinde em que está inserido, melhorando as condições de vida e a igualdade de oportunidades da população, procurando soluções diferenciadas e adaptáveis às características dos reais problemas instalados nessa comunidade, prestando serviços de qualidade, quer do ponto de vista social e humano, quer do ponto de vista técnico; cumprindo os requisitos do SGQ e da Melhoria Contínua.',
            'Para desenvolver esta atividade define uma Política de permanente desenvolvimento da sua competência, de cooperação e de diálogo, quer no seio do próprio setor solidário, quer com os outros setores da sociedade.',
            'Sendo uma instituição de proximidade, o CSE entende que os nossos colaboradores são a chave do sucesso - daí haver uma constante preocupação com o seu bem-estar, condições de trabalho, formação e comunicação e uma progressiva identificação com os valores da instituição.',
            'Enquanto 2 com responsabilidade no desenvolvimento social local, constitui fator estratégico para o sucesso da sua intervenção criar níveis de confiança, autonomia e liberdade que fomentem nas pessoas a vontade de ultrapassar os diversos obstáculos com que se deparam.',
            'Com vista à sustentabilidade ambiental, a instituição procura adotar as melhores práticas de trabalho sensibilizando também a comunidade local.',
            'O CSE assume-se ainda como estrutura de promoção e defesa dos interesses da comunidade onde está inserido junto do poder político.',
        ],
        values:['Valores: solidariedade, proximidade, qualidade, profissionalismo, ética, iniciativa, compromisso, humanismo e trabalho em rede.'],
        approvedDate: "Aprovado em reunião da Direção no dia 09 de abril de 2013."
    },

    //------------INSTITUTIONAL PAGE-----------//

    INSTITUONAL_DOCUMENTS_TOP:{
        topImage: instituonalDocumentsTop,
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "Documentos Institucionais", link: "/documentos_institucionais" },
        ],
    },

    INSTITUONAL_DOCUMENTS: [
        {
            title: "Inscrições Educação Pré-Escolar",
            bgColor: Color.red.main,
            files: [
                {
                    name: "Ficha de Inscrição Pré-Escolar",
                    link: "docs/EPE_FichaInscricao.pdf"
                },
                {
                    name: "Ficha de Renovação",
                    link: ""
                },
                {
                    name: "Documentos a Apresentar",
                    link: "docs/EPE_DocsApresen.pdf"
                }
            ]
        },
        {
            title: "Inscrições ATL",
            bgColor: Color.blue.main, // bg-info
            files: [
                {
                    name: "Ficha Inscrição ATL",
                    link: "docs/FichaInscricao_ATL.pdf"
                },
                {
                    name: "Ficha Renovação",
                    link: ""
                },
                {
                    name: "Documentos a Apresentar",
                    link: "docs/DocsApresen_ATL.pdf"
                }
            ]
        },
        {
            title: "Inscrições Lar. S. Lourenço",
            bgColor: Color.green.main,
            files: [
                {
                    name: "Ficha Inscrição Lar",
                    link: "docs/FichaInscricao_LAR.pdf"
                },
                {
                    name: "Documentos a Apresentar",
                    link: "docs/DocsApresen_LAR.pdf"
                }
            ]
        },
        {
            title: "Inscrições Serviço Apoio Domiciliário",
            bgColor: Color.yellow.main,
            files: [
                {
                    name: "Ficha Inscrição SAD",
                    link: "docs/FxInscricao_SAD.pdf"
                },
                {
                    name: "Documentos a Apresentar",
                    link: "docs/DocsApresen_SAD.pdf"
                }
            ]
        },
        {
            title: "Convocatórias",
            bgColor: Color.purple.main,
            files: [
                {
                    name: "Convocatória Assembleia Geral 2017",
                    link: "docs/convocatoria_assembleia_Apresentacao_contas_2017.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral 2018",
                    link: "docs/Convocatoria_votacao_Apresentacao_Contas_2018.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral 2019",
                    link: "docs/convocatoria_votacaoOrcamento_2019.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral Novembro de 2019",
                    link: "docs/convocatoria_planoActividades_112019.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral 2020",
                    link: "docs/convocatoria_assembleia_Apresentacao_contas_2020.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral Extraordinária 2020",
                    link: "docs/convocatoria_extraordinaria_2020.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral 2021",
                    link: "docs/Convocatoria_votacao_Apresentacao_Contas_2021.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral Nov 2021",
                    link: "docs/convocatoria_votacaoOrcamento_2022.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral Março 2022",
                    link: "docs/convocatoria_assembleia_Apresentacao_contas_2021.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral Nov 2022",
                    link: "docs/convocatoria_votacaoOrcamento_2023.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral Extraordinária 30 Nov 2022",
                    link: "docs/CONVOCATÓRIA_Ratificação_Assembleia_Extraordinaria_EMPRESTIMO_2020.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral Março de 2023",
                    link: "docs/Convocatoria_votacao_Apresentacao_Contas_2022.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral Extraordinária Novembro 2023",
                    link: "docs/convocatoria_extraordinaria_Nov_2023.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral Novembro de 2023",
                    link: "docs/convocatoria_votacaoOrcamento_2024.pdf"
                },
                {
                    name: "Convocatória Assembleia Geral Março de 2024",
                    link: "docs/Convocatoria_votacao_Apresentacao_Contas_2023.pdf"
                }
            ]
        },
        {
            title: "Demonstrações Financeiras",
            bgColor: Color.pink.main,
            files: [
                {
                    name: "Demonstrações Financeiras 2017",
                    link: "docs/demonstracaoFinanceira2017.pdf"
                },
                {
                    name: "Demonstrações Financeiras 2018",
                    link: "docs/demonstracaoFinanceira2018.pdf"
                },
                {
                    name: "Demonstrações Financeiras 2019",
                    link: "docs/demonstracaoFinanceira2019.pdf"
                },
                {
                    name: "Certificação Legal das contas 2019",
                    link: "docs/Certif_Legal_Contas_2019_CSE.pdf"
                },
                {
                    name: "Demonstrações Financeiras 2020",
                    link: "docs/demonstracaoFinanceira2020.pdf"
                },
                {
                    name: "Certificação Legal das contas 2020",
                    link: "docs/Certif_Legal_Contas_2020_CSE.pdf"
                },
                {
                    name: "Demonstrações Financeiras 2021",
                    link: "docs/demonstracaoFinanceira2021.pdf"
                },
                {
                    name: "Certificação Legal das contas 2021",
                    link: "docs/Certif_Legal_Contas_2021_CSE.pdf"
                },
                {
                    name: "Demonstrações Financeiras 2022",
                    link: "docs/demonstracaoFinanceira2022.pdf"
                },
                {
                    name: "Certificação Legal das contas 2022",
                    link: "docs/Certif_Legal_Contas_2021_CSE.pdf"
                }
            ]
        },
        {
            title: "Relatório Actividade e Contas",
            bgColor: Color.red.main,
            files: [
                {
                    name: "Relatório Actividade e Contas 2017",
                    link: "docs/RelatorioAtividadesContas2017.pdf"
                },
                {
                    name: "Relatório Actividade e Contas 2018",
                    link: "docs/relatoriocontas_2018.pdf"
                },
                {
                    name: "Relatório Actividade e Contas 2019",
                    link: "docs/relatoriocontas_2019.pdf"
                },
                {
                    name: "Relatório Actividade e Contas 2020",
                    link: "docs/RelatorioAtividadesContas2020.pdf"
                },
                {
                    name: "Relatório Actividade e Contas 2021",
                    link: "docs/RelatorioAtividadesContas2021.pdf"
                },
                {
                    name: "Relatório Actividade e Contas 2022",
                    link: "docs/RelatorioAtividadesContas2022.pdf"
                },
                {
                    name: "Relatório Actividade e Contas 2023",
                    link: "docs/RelatórioAtividadesContas CSE 2023_final.pdf"
                }
            ]
        },
        {
            title: "Estatutos Centro Social Ermesinde",
            bgColor: Color.green.main,
            files: [
                {
                    name: "Estatutos",
                    link: "docs/EstatutosCSE.pdf"
                }
            ]
        },
        {
            title: "Plano de Actividades e Orçamento",
            bgColor: Color.pink.main,
            files: [
                {
                    name: "Actividades e Orçamento 2019",
                    link: "docs/planoActividades2019.pdf"
                },
                {
                    name: "Actividades e Orçamento 2020",
                    link: "docs/planoActividades2020.pdf"
                },
                {
                    name: "Actividades e Orçamento 2021",
                    link: "docs/planoActividades2021.pdf"
                },
                {
                    name: "Actividades e Orçamento 2022",
                    link: "docs/planoActividades2022.pdf"
                },
                {
                    name: "Actividades e Orçamento 2023",
                    link: "docs/planoActividades2023.pdf"
                },
                {
                    name: "Actividades e Orçamento 2024",
                    link: "docs/PlanoAtividadesOrçamento CSE-2024_nov-1.pdf"
                }
            ]
        },
        {
            title: "Regulamentos Internos",
            bgColor: Color.blue.main,
            files: [
                {
                    name: "Regulamento Interno - Creche",
                    link: "docs/RI CRE-2.pdf"
                },
                {
                    name: "Regulamento Interno - Creche Familiar",
                    link: "docs/RI CRF-2.pdf"
                },
                {
                    name: "Regulamento Interno - Jardim de Infância",
                    link: "docs/RI JAI-4.pdf"
                },
                {
                    name: "Regulamento Interno - CATL",
                    link: "docs/RI ATL-4.pdf"
                },
                {
                    name: "Regulamento Interno - LAR",
                    link: "docs/RI LAR-1.pdf"
                },
                {
                    name: "Regulamento Interno - SAD",
                    link: "docs/RI_SAD.pdf"
                }
            ]
        },
    ],

    KINDERGARTEN: {
        topImage: kindergartenTop,
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "Jardim Infância", link: "/jardim_infancia" },
        ],
        title:"Jardim Infância",
        content: [
            'Integrado na missão do Centro Social de Ermesinde, o Jardim de Infância é uma resposta social de natureza educativa, com capacidade para acolher crianças entre os 3 e os 6 anos de idade. Este espaço dedica-se a promover o desenvolvimento integral das crianças, num ambiente seguro, acolhedor e estimulante.',

            'Os objetivos centrais do nosso Jardim de Infância incluem:',

            '• Apoiar a conciliação da vida familiar e profissional das famílias, garantindo um acompanhamento de qualidade às crianças durante o horário laboral dos encarregados de educação;',
            '• Fomentar o desenvolvimento global da criança, assegurando o respeito pelas suas características individuais, numa abordagem personalizada e inclusiva;',
            '• Promover a aprendizagem através de atividades lúdicas e educativas, estimulando competências sociais, emocionais e cognitivas;',
            '• Incentivar a colaboração ativa com as famílias, num trabalho conjunto que enriqueça o processo educativo e o bem-estar da criança.',

            'Com uma equipa de profissionais qualificados e dedicados, o Jardim de Infância do Centro Social de Ermesinde é um espaço onde cada criança é valorizada, respeitada e incentivada a crescer feliz e confiante, construindo as bases para o seu futuro.'
        ],
        image: kindergarten,
    },

    CRECHE: {
        topImage: crecheTop,
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "Creche", link: "/creche" },
        ],
        title:"Creche",
        content: [
            "A Creche do Centro Social de Ermesinde é uma resposta social de natureza socioeducativa, destinada ao acolhimento de crianças desde os 4 meses até aos 3 anos de idade. Com capacidade para proporcionar um ambiente seguro, afetuoso e estimulante, a Creche é um espaço dedicado ao apoio às famílias e ao desenvolvimento integral das crianças nas suas primeiras etapas de vida.",

            "Os principais objetivos da nossa Creche incluem:",

            "• Facilitar a conciliação da vida profissional e familiar dos pais e cuidadores, assegurando o cuidado diário e personalizado às crianças;",
            "• Colaborar com as famílias na partilha de cuidados e responsabilidades educativas, promovendo uma relação de confiança e cooperação;",
            "• Estimular o desenvolvimento físico, emocional, social e cognitivo da criança, através de atividades adequadas à sua faixa etária e necessidades individuais;",
            "• Garantir um ambiente de segurança e bem-estar, onde cada criança é respeitada e valorizada como ser único em crescimento.",

            "Com uma equipa de profissionais experientes e dedicados, a Creche do Centro Social de Ermesinde procura contribuir para o desenvolvimento harmonioso das crianças, oferecendo-lhes as melhores condições para crescerem felizes e saudáveis, num espaço que as prepara para as próximas fases da vida."
        ],

        image: creche,
    },

    CATL: {
        topImage: catlTop,
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "CATL", link: "/catl" },
        ],
        title:"CATL",
        content: [
            "O Centro de Atividades de Tempos Livres (CATL) do Centro Social de Ermesinde é uma resposta social que visa apoiar as famílias e proporcionar atividades educativas e recreativas a crianças e jovens após o horário escolar. Destinado a crianças com idades compreendidas entre os 6 e os 12 anos, o CATL oferece um espaço seguro e dinâmico onde os pequenos podem expandir suas habilidades e talentos enquanto se divertem.",

            "Os principais objetivos do CATL incluem:",

            "• Oferecer uma resposta educativa e lúdica para as crianças, permitindo-lhes um equilíbrio entre o estudo e o lazer após a escola;",
            "• Promover o desenvolvimento pessoal e social dos participantes, incentivando a cooperação, a responsabilidade e a autonomia por meio de atividades em grupo;",
            "• Proporcionar um ambiente estimulante e seguro, onde as crianças possam aprender, brincar e explorar novas experiências de forma divertida e enriquecedora;",
            "• Colaborar estreitamente com as famílias, assegurando que as necessidades das crianças sejam atendidas de maneira integral e personalizada.",

            "Com uma equipa de profissionais qualificados e motivados, o CATL do Centro Social de Ermesinde é mais do que um espaço de cuidados: é um lugar onde as crianças podem crescer, aprender e desenvolver-se de forma divertida, social e criativa."
        ],
        image: catl,
    },

    LAR: {
        topImage: larTop,
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "Lar S. Lourenço", link: "/lar_s_lourenco" },
        ],
        title:"Lar S. Lourenço",
        content: [
            "O Lar S. Lourenço, integrado no Centro Social de Ermesinde, é uma resposta social destinada a acolher pessoas idosas que necessitam de apoio contínuo para assegurar o seu bem-estar e qualidade de vida. Este espaço oferece um ambiente familiar e seguro, promovendo o conforto e a dignidade dos seus residentes.",

            "Os principais objetivos do Lar S. Lourenço incluem:",

            "• Proporcionar cuidados de saúde, higiene e alimentação adaptados às necessidades individuais de cada residente;",
            "• Promover a convivência social e a integração, através de atividades lúdicas, culturais e recreativas;",
            "• Garantir um ambiente acolhedor e seguro, assegurando a qualidade de vida e o respeito pela individualidade de cada pessoa;",
            "• Apoiar as famílias, oferecendo-lhes a tranquilidade de saber que os seus entes queridos estão em boas mãos.",

            "Com uma equipa de profissionais qualificados e dedicados, o Lar S. Lourenço é mais do que um espaço de acolhimento: é um lar onde o cuidado, a atenção e o respeito se encontram no centro de todas as ações."
        ],
        image: lar,
    },

    HOUSECARE: {
        topImage: housecareTop,
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "Apoio Domiciliário", link: "/apoio_domiciliario" },
        ],
        title:"Apoio Domiciliário",
        content: [
            "O Serviço de Apoio Domiciliário (SAD) do Centro Social de Ermesinde é uma resposta social dedicada ao apoio individualizado a pessoas idosas ou dependentes, assegurando-lhes o conforto, a dignidade e a qualidade de vida no seu próprio lar. Este serviço é essencial para quem necessita de cuidados específicos no dia a dia, mas deseja manter a sua independência no ambiente familiar.",

            "Os principais objetivos do Apoio Domiciliário incluem:",

            "• Garantir o bem-estar e a segurança dos utentes, proporcionando cuidados de higiene, alimentação e conforto de forma personalizada e atenta;",
            "• Promover a autonomia e a qualidade de vida, adaptando os serviços às necessidades específicas de cada pessoa;",
            "• Facilitar a permanência no domicílio, prevenindo ou adiando a necessidade de institucionalização;",
            "• Apoiar as famílias e cuidadores, oferecendo-lhes suporte nas suas responsabilidades diárias e aliviando a sobrecarga emocional e física.",

            "Com uma equipa de profissionais qualificados e dedicados, o Apoio Domiciliário do Centro Social de Ermesinde garante uma resposta de proximidade, eficiência e humanismo, contribuindo para que cada utente viva com conforto e dignidade, rodeado dos seus afetos e memórias."
        ],
        image: housecare,
    },

    EMPLOYEMENT_SERVICE: {
        topImage: feTop,
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "Formação e Emprego", link: "/formacao_e_emprego" },
        ],
        title:"Formação e Emprego",
        content: [
            "O Serviço de Formação e Emprego do Centro Social de Ermesinde é uma resposta social orientada para a capacitação e a promoção da empregabilidade, visando apoiar pessoas em situação de exclusão ou vulnerabilidade económica e social. Este serviço desempenha um papel essencial na criação de oportunidades para o desenvolvimento pessoal, profissional e social dos seus beneficiários.",

            "Os principais objetivos do Serviço de Formação e Emprego incluem:",

            "• Oferecer ações de formação profissional ajustadas às necessidades do mercado de trabalho, promovendo a aquisição de competências técnicas e práticas;",
            "• Apoiar na integração no mercado de trabalho, proporcionando orientação vocacional e acompanhamento personalizado;",
            "• Incentivar o empreendedorismo e a criação de negócios próprios, oferecendo suporte técnico e informação relevante;",
            "• Contribuir para a autonomia económica e social dos beneficiários, promovendo a sua inclusão ativa na sociedade.",

            "Com uma equipa dedicada e especializada, o Serviço de Formação e Emprego do Centro Social de Ermesinde é um espaço de transformação e oportunidades, onde cada pessoa é encorajada a desenvolver o seu potencial e a construir um futuro melhor."
        ],
        image: fe,
    },

    ESCOLHAS7G: {
        topImage: escolhas7gTop,
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "ESCOLHAS 7G", link: "/escholhas7g" },
        ],
        title:"ESCOLHAS 7G",
        content: [
            "O programa Escolhas 7G, gerido pelo Centro Social de Ermesinde, é uma iniciativa social que visa promover a inclusão e o desenvolvimento de crianças, jovens e suas famílias em situações de vulnerabilidade social. Com uma abordagem educacional e focada na comunidade, o programa busca proporcionar oportunidades de crescimento pessoal, social e cultural, com o objetivo de combater a exclusão e a desigualdade.",
            "Os principais objetivos do programa Escolhas 7G são os seguintes: Promover a inclusão social e educacional de crianças e jovens, oferecendo serviços de apoio escolar, atividades culturais e desportivas para apoiar o seu desenvolvimento integral; Apoiar as famílias na superação de desafios sociais e económicos, fornecendo recursos e orientações para melhorar a sua qualidade de vida e fortalecer a coesão familiar; Incentivar a cidadania ativa e a responsabilidade social, promovendo atividades que sensibilizem os jovens para os direitos humanos, voluntariado e respeito pelos outros; Colaborar com a comunidade local, estabelecendo parcerias e redes de apoio que contribuam para a melhoria das condições de vida e integração social dos participantes.",
            "Com uma equipa multidisciplinar e uma abordagem integrada, o programa Escolhas 7G do Centro Social de Ermesinde trabalha para garantir que as crianças e os jovens participantes tenham a oportunidade de construir um futuro melhor, promovendo a igualdade de oportunidades e o valor de todos os membros da comunidade."
        ],
        image: escolhas7g,
    },

    SAAS: {
        topImage: saasTop,
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "SAAS", link: "/saas" },
        ],
        title:"SAAS - Serviço de Atendimento e Acompanhamento Social",
        content: [
            'O Serviço de Atendimento e Acompanhamento Social (SAAS) consiste num atendimento de primeira linha que responde eficazmente às situações de crise e/ou de emergência social, destinado a assegurar o apoio técnico, tendo em vista a prevenção e resolução de problemas sociais. O SAAS é um serviço que assegura o atendimento e o acompanhamento de pessoas e famílias em situação de vulnerabilidade e exclusão social, bem como de emergência social.',
            'No SAAS dinamizamos atividades de atendimento e acompanhamento social conforme as situações com que a equipa se depara. Pretende-se uma resposta descentralizada e próxima através de uma intervenção multidisciplinar, articulada e célere, potenciando uma ação concertada dos diversos organismos e entidades envolvidos. A cada família é atribuído um técnico de atendimento/acompanhamento para um atendimento personalizado, evitando respostas fragmentadas e a duplicação de intervenções.',
            'O atendimento decorre nas instalações do Centro de Animação das Saibreiras, sito na Travessa João de Deus, 261 em Ermesinde.',
            'Temos como principal fim a promoção das condições de inclusão e integração social da população da freguesia de Ermesinde, particularmente aqueles que se encontram em situação de vulnerabilidade/fragilidade por razões de pobreza, deficiência, risco social ou familiar ou de difícil acesso ao emprego.',
        ],
        image: saas,
    },

    CLDS4G: {
        topImage: Clds4gTop,
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "CLDS4G", link: "/clds4g" },
        ],
        title: "CLDS4G",
        subtitle: "Centro Social de Ermesinde coordena o programa da quarta geração do Contrato Local de Desenvolvimento Social (CLDS4G), projeto VALER.",
        description: "O projeto foi criado pela portaria nº229/2018, de 14 de agosto e é cofinanciado pela UE no âmbito da tipologia de operações 3.10 do Programa Operacional Inclusão Social e Emprego (POISE).",
        objective: {
            main: "Promover a inclusão social e combater a pobreza da população das freguesias de Valongo e Ermesinde.",
            axes: [
                {
                    title: "Eixo 1 – emprego, formação e qualificação",
                    items: [
                        "Espaço Emprego e Formação: Atendimento e encaminhamento de jovens e adultos desempregados/as para ofertas de emprego e de formação.",
                        "Espaço Empreendedorismo: Divulgação de programas de apoio ao auto-emprego e sensibilização para a criação de produtos vendáveis através de matéria prima reutilizável."
                    ]
                },
                {
                    title: "Eixo 2 – intervenção familiar e parental, preventiva da pobreza infantil",
                    items: [
                        "Espaço Cidadania: Apoio no acesso online aos serviços públicos.",
                        "Espaço Família: Acompanhamento de famílias e promoção de competências parentais."
                    ]
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
            { label: "Home", link: "/home" },
            { label: "E2OV", link: "/e2ov" },
        ],
        title:"E2OV",
        content: [
            "O programa E2OV, gerido pelo Centro Social de Ermesinde, é uma iniciativa social que visa promover a inclusão e o desenvolvimento de crianças, jovens e suas famílias em situações de vulnerabilidade social. O programa foca-se na criação de oportunidades para o crescimento pessoal, social e cultural, a fim de combater a exclusão e a desigualdade.",
            "Os principais objetivos do programa E2OV incluem:",
            "• Promover a inclusão social e educacional de crianças e jovens, oferecendo serviços de apoio escolar, atividades culturais e desportivas para melhorar o seu desenvolvimento integral;",
            "• Apoiar as famílias na superação de desafios sociais e económicos, fornecendo recursos e orientação para melhorar a sua qualidade de vida e fortalecer a coesão familiar;",
            "• Incentivar a cidadania ativa e a responsabilidade social através de atividades que sensibilizem para os direitos humanos, voluntariado e respeito pelos outros;",
            "• Colaborar com a comunidade local, estabelecendo parcerias e redes de apoio para melhorar as condições de vida e a integração social dos participantes.",
            "Com uma equipa multidisciplinar e uma abordagem abrangente, o programa E2OV garante que as crianças e os jovens tenham acesso às oportunidades necessárias para construir um futuro melhor, promovendo a igualdade e valorizando cada indivíduo na comunidade."
        ],
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
            { label: "Home", link: "/home" },
            { label: "Projectos Cofinanciados", link: "/cofinanciados" },
        ],
        title: "Projectos Cofinanciados",
        projects: [
            {
                title: "Programa Norte 2020",
                description: "Apoio a projetos sociais e de desenvolvimento na região do Norte.",
                image: logo1,
                link: "http://norte2020.pt/",
            },
            {
                title: "Portugal 2020",
                description: "Iniciativas de cofinanciamento para o desenvolvimento regional.",
                image: logo2,
                link: "https://www.portugal2020.pt/",
            },
            {
                title: "UE FSE",
                description: "Fundo Social Europeu para promover a inclusão social.",
                image: logo3,
                link: "https://ec.europa.eu/esf/home.jsp",
            },
        ],
    },

    CENTRO_QUALIFICA: {
        topImage: logoQualifica,
        breadcrumbs: [
            { label: "Home", link: "/home" },
            { label: "Centro Qualifica", link: "/centro_qualifica" },
        ],
        title: "Centro Qualifica do Centro Social de Ermesinde",
        description: "O Centro qualifica do Centro Social de Ermesinde foi criado em maio de 2020 e iniciou a sua atividade no dia 01-06-2020, visa elevar o nível de qualificação da população adulta e reforçar a orientação dos/as jovens que não frequentam qualquer ação de educação ou de formação nem estão empregados (NEET).",
        objectives: [
            "Aumentar os níveis de qualificação e melhorar a empregabilidade dos ativos, dotando-os de competências ajustadas às necessidades do mercado de trabalho.",
            "Reduzir significativamente as taxas de analfabetismo, literal e funcional, combatendo igualmente o semianalfabetismo e iletrismo.",
            "Valorizar o sistema, promovendo um maior investimento dos jovens adultos em percursos de educação e formação.",
            "Corrigir o atraso estrutural do país em matéria de escolarização no sentido de uma maior convergência com a realidade europeia.",
            "Adequar a oferta e a rede formativa às necessidades do mercado de trabalho e aos modelos de desenvolvimento nacionais e regionais."
        ],
        targetAudience: [
            "Adultos (com mais de 18 anos) que pretendam adquirir, reforçar ou ver reconhecidos os conhecimentos e competências que desenvolveram ao longo da vida.",
            "Jovens (com mais de 15 anos) que não se encontrem a frequentar modalidades de educação ou de formação e que não estejam inseridos no mercado de trabalho."
        ],
        contactInfo: {
            address: "Largo António da Silva Moreira, 921 – 4445-280 Ermesinde",
            email: "csermesinde@centroqualifica.gov.pt",
            phone: "937709015 | 937715391",
            facebook: "https://www.facebook.com/centrosocialdeermesinde/"
        }
    }
};

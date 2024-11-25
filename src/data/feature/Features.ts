import erasmus from '../../assets/img/courses/courses-img1.jpg';
import centro_qualifica from '../../assets/img/courses/courses-img2.jpg';
import escola_segunda from '../../assets/img/courses/courses-img3.jpg';
import zona_Z from '../../assets/img/courses/courses-img4.jpg';
import Color from "../../theme/Color";

import Work from '@mui/icons-material/Work';
import ChildCare from '@mui/icons-material/ChildCare';
import BabyChangingStation from '@mui/icons-material/BabyChangingStation';
import Elderly from '@mui/icons-material/Elderly';

export const Features = {
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


};

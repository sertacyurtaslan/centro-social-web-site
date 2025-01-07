import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HistoryPage from "../pages/instutition/ui/history/HistoryPage";
import HomePage from "../pages/home/ui/HomePage";
import {SocialOrgansPage} from "../pages/instutition/ui/social_organs/SocialOrgansPage";
import {QualityPolicyPage} from "../pages/instutition/ui/quality_policy/QualityPolicyPage";
import {InstituonalDocumentsPage} from "../pages/instutition/ui/instituonal_documents/InstituonalDocumentsPage";
import {SaasPage} from "../pages/project_activities/ui/saas/SaasPage";
import {Clds4gPage} from "../pages/project_activities/ui/clds4g/Clds4gPage";
import {KindergartenPage} from "../pages/social_responses/ui/kindergarten/KindergartenPage";
import {CrechePage} from "../pages/social_responses/ui/creche/CrechePage";
import {CatlPage} from "../pages/social_responses/ui/catl/CatlPage";
import {HousecarePage} from "../pages/social_responses/ui/house_care/HousecarePage";
import {LarPage} from "../pages/social_responses/ui/lar/LarPage";
import {EmployementServicePage} from "../pages/social_responses/ui/employement_service/EmployementServicePage";
import {Escolhas7gPage} from "../pages/project_activities/ui/escolhas7g/Escolhas7gPage";
import {E2ovPage} from "../pages/project_activities/ui/e2ov/E2ovPage";
import {ContactsPage} from "../pages/contacts/ui/ContactsPage";
import {CofinanciadosPage} from "../pages/project_activities/ui/cofinanciados/CofinanciadosPage";
import { CentroQualificaPage } from '../pages/project_activities/ui/centro_qualifica/CentroQualificaPage';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/historia" element={<HistoryPage />} />
            <Route path="/orgaos_sociais" element={<SocialOrgansPage />} />
            <Route path="/politica_da_qualidade" element={<QualityPolicyPage />} />
            <Route path="/documentos_institucionais" element={<InstituonalDocumentsPage />} />
            <Route path="/jardim_infancia" element={<KindergartenPage />} />
            <Route path="/creche" element={<CrechePage />} />
            <Route path="/catl" element={<CatlPage />} />
            <Route path="/lar_s_lourenco" element={<LarPage />} />
            <Route path="/apoio_domiciliario" element={<HousecarePage />} />
            <Route path="/formacao_e_emprego" element={<EmployementServicePage />} />
            <Route path="/escolhas_7g" element={<Escolhas7gPage />} />
            <Route path="/saas" element={<SaasPage />} />
            <Route path="/clds4g" element={<Clds4gPage />} />
            <Route path="/e2ov" element={<E2ovPage />} />
            <Route path="/cofinanciados" element={<CofinanciadosPage/>} />
            <Route path="/centro_qualifica" element={<CentroQualificaPage/>} />
            <Route path="/contactos" element={<ContactsPage />} />
        </Routes>
    );
};

export default Router;

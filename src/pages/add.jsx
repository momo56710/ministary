import { Box, Text, Center, Grid } from '@chakra-ui/react';
import AddS from '../components/addingPages/Startups';
import AddPI from '../components/addingPages/Innovant';
import NavBar from '../components/nav';
import { useState } from 'react';

export default function App({ add }) {
  const [title, setTitle] = useState('');

  if (add === 'ST') {
    setTitle('Ajouter Label Startups')
  }
  if (add === 'PI') {
    setTitle('Ajouter Label Projet Innovent') 
  }
  const addType = () => {
    if (add === 'ST') {
      return <AddS />;
    }
    if (add === 'PI') {
      return <AddPI />;
    }
  };

  return (
    <>
      <NavBar email={'user@gmail.com'}></NavBar>

      <Box>
        <Center>
          <Box w="80vw" h="100%" borderWidth="1px" borderRadius="lg">
            <Text fontSize="2xl" p={5} textAlign={'center'} fontWeight="bold">
              {title()}
            </Text>
            <Box
              w="100%"
              h="100%"
              borderTopLeftRadius="lg"
              borderTopRightRadius="lg"
              p={4}
            >
              <Grid gap={6}>{addType()}</Grid>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
}

// Année
// Numero de label
// Nom/اللقب
// Prénom /الاسم
// Vous êtes/ صفتك
// Autres co-fondateurs / المؤسسون الاخرون
// E-mail / البريد الالكتروني
// Téléphone / الهاتف
// Site Web/ الموقع الالكتروني
// Nom du projet / اسم المشروع
// Secteur d'activité / مجال العمل
// Description courte du projet/ شرح مختصر للمشروع
// Présentation détaillé du projet et ses aspects d'innovation / العرض التفصيلي للمشروع وجوانب الابتكار فيه
// Avancement du projet / مدى تقدم المشروع
// CV du/des fondateurs / السيرة الذاتية للمؤسسين
// Brevet (si il y en a) / براءة الاختراع ان وجدت
// Concours/récompenses /  الجوائز و المسابقات
// Wilaya / الولاية
// Adresse / العنوان

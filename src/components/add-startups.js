import { useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect, useRef } from 'react';
import Autocomplete from './autocomplete.js';
import activities from './activities';
import TagInput from './input';

import {
  Text,
  Input,
  Button,
  Textarea,
  Select,
  Grid,
  Flex,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/react';
export default () => {
  const navigate = useNavigate();
  const [serials, setSerials] = useState([]);
  const [otherActivities, setotherActivities] = useState([]);
  const [coFounders, setcoFounders] = useState([]);

  const handleTagsChange = useCallback((event, tags) => {
    setSerials(tags);
  }, []);

  const display = (other, display) => {
    other === 'Autre' ? (display = 'inline') : (display = 'none');
    return display;
  };
  return (
    <>
      <Text fontSize="xl" fontWeight="bold">
        Année
      </Text>
      <Input type={'number'} placeholder="20XX" />
      <Text fontSize="xl" fontWeight="bold">
        Numero de label
      </Text>
      <Input placeholder="XXXXXXXXX" type={'number'} />
      <Text fontSize="xl" fontWeight="bold">
        Dénomination commerciale / الاسم التجاري
      </Text>
      <Input placeholder="Dénomination commerciale" type={'text'} />
      <Text fontSize="xl" fontWeight="bold">
        Description courte du projet/ شرح مختصر للمشروع
      </Text>
      <Textarea placeholder="Description" />
      <Text fontSize="xl" fontWeight="bold">
        Secteur d'activité / مجال العمل
      </Text>
      <Flex gap={4}>
        <Select
          value={otherActivities}
          onChange={e => {
            setotherActivities(e.target.value);
          }}
        >
          {activities().map((val, i) => {
            return <option value={val}>{`${val}`}</option>;
          })}
          <option value="Autre">Autre</option>
        </Select>
        <Input
          placeholder={otherActivities}
          display={e => display(otherActivities, display)}
        ></Input>
      </Flex>
      <Text fontSize="xl" fontWeight="bold">
        Avancement du projet / مدى تقدم المشروع
      </Text>
      <Textarea placeholder="Avancement du projet" />
      <Text fontSize="xl" fontWeight="bold">
        Les qualifications scientifiques et techniques des fondateurs / المؤهلات
        العلمية والفنية للمؤسسين
      </Text>
      <InputGroup size="sm">
        <Input className='fileInput' type={'file'} placeholder="link" />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Business Plan et présentation de la startup /خطة العمل وعرض الشركة
        الناشئة
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input placeholder="link" />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Brevet (si il y en a) / براءة الاختراع ان وجدت
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input placeholder="link" />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Concours/récompenses / الجوائز و المسابقات
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input placeholder="link" />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Copie du registre de commerce / نسخة من السجل التجاري
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input placeholder="link" />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Nombre d'employés / عدد العمال
      </Text>
      <Input type={'number'} placeholder="XX" />
      <Text fontSize="xl" fontWeight="bold">
        Date de création / تاريخ الانشاء
      </Text>
      <Input type={'date'} />
      <Text fontSize="xl" fontWeight="bold">
        Nom/اللقب
      </Text>
      <Input placeholder="Nom" type={'text'} />
      <Text fontSize="xl" fontWeight="bold">
        Prénom /الاسم
      </Text>
      <Input placeholder="Prenom" />
      <Text fontSize="xl" fontWeight="bold">
        Genre
      </Text>
      <Select placeholder="">
        <option value="Homme">Homme</option>
        <option value="femme">femme</option>
      </Select>
      <Text fontSize="xl" fontWeight="bold">
        E-mail / البريد الالكتروني
      </Text>
      <InputGroup>
        <Input placeholder="email" />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Téléphone / الهاتف
      </Text>
      <InputGroup size="sm">
        <Input placeholder="phone" type={'number'} />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Wilaya / الولاية
      </Text>
      {Autocomplete()}
      <Text fontSize="xl" fontWeight="bold">
        Adresse / العنوان
      </Text>
      <Input placeholder="Adresse" />
      <Text fontSize="xl" fontWeight="bold">
      Forme juridique/ الشكل القانوني
      </Text>
      <Input placeholder="Adresse" />
      <Text fontSize="xl" fontWeight="bold">
      NIF (numéro d'identification fiscale)
      </Text>
      <Input placeholder="Adresse" />
      <Text fontSize="xl" fontWeight="bold">
      Resultat
      </Text>
      <Input placeholder="Adresse" />
      <Text fontSize="xl" fontWeight="bold">
        Autre
      </Text>
      <TagInput
        placeholder={'Autre'}
        tags={serials}
        colorScheme="teal"
        onTagsChange={handleTagsChange}
      />
      <Button
        variant={'solid'}
        colorScheme={'teal'}
        size={'md'}
        onClick={async () => {
          console.log();
        }}
      >
        Add
      </Button>
      <Button onClick={() => navigate('/')} variant={'solid'} size={'md'}>
        Return To LGLs
      </Button>
    </>
  );
};
// Annee
// Numero de label
// Dénomination commerciale / الاسم التجاري
// Description courte du projet/ شرح مختصر للمشروع
// Secteur d'activité / مجال العمل
// Avancement du projet / مدى تقدم المشروع
// Les qualifications scientifiques et techniques des fondateurs / المؤهلات العلمية والفنية للمؤسسين
// Business Plan et présentation de la startup /خطة العمل وعرض الشركة الناشئة
// Brevet (si il y en a) / براءة الاختراع ان وجدت
// Concours/récompenses /  الجوائز و المسابقات
// Copie du registre de commerce / نسخة من السجل التجاري
// Nombre d'employés / عدد العمال
// Date de création / تاريخ الانشاء
// Nom/اللقب
// Prénom /الاسم
// Genre
// E-mail / البريد الالكتروني
// Téléphone / الهاتف
// Wilaya / الولاية
// Adresse / العنوان
// Forme juridique/ الشكل القانوني
// NIF (numéro d'identification fiscale)
// Resultat

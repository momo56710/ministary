import React from 'react';
import NavBar from '../components/nav';
import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect, useRef } from 'react';
import Autocomplete from '../components/autocomplete.js';
import activities from '../components/activities';
import TagInput from '../components/input';
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

export default function Edit({ person }) {
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
  console.log(person);
  return (
    <>
      <NavBar email={'Xahu'} d={'none'}></NavBar>
      <Text fontSize="xl" fontWeight="bold">
        Année
      </Text>
      <Input value={person.Annee} placeholder="20XX" />
      <Text fontSize="xl" fontWeight="bold">
        Numero de label
      </Text>
      <Input value={person.NDL} placeholder="XXXXXXXXX" type={'number'} />
      <Text fontSize="xl" fontWeight="bold">
        Nom/اللقب
      </Text>
      <Input value={person.Nom} placeholder="Nom" type={'text'} />
      <Text fontSize="xl" fontWeight="bold">
        Prénom /الاسم
      </Text>
      <Input value={person.Prenom} placeholder="Prenom" />
      <Text fontSize="xl" fontWeight="bold">
        Genre
      </Text>
      <Select value={person.Genre} placeholder="">
        <option value="Homme">Homme</option>
        <option value="femme">femme</option>
      </Select>
      <Text fontSize="xl" fontWeight="bold">
        Vous êtes/ صفتك
      </Text>
      <Grid gap={5}>
        <Select
          value={person.Type}
          placeholder=""
          onChange={e => {
            setcoFounders(e.target.value);
          }}
        >
          <option value="fondateur">fondateur</option>
          <option value="co-fonadteur">co-fonadteur</option>
        </Select>
        <TagInput
          display={display(coFounders, display)}
          placeholder={'Autres co-fondateurs / المؤسسون الاخرون'}
          tags={serials}
          colorScheme="teal"
          onTagsChange={handleTagsChange}
        />
      </Grid>
      <Text fontSize="xl" fontWeight="bold">
        E-mail / البريد الالكتروني
      </Text>
      <InputGroup>
        <Input value={person.Email} placeholder="email" />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Téléphone / الهاتف
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="+213" />
        <Input value={person.Telephone} placeholder="phone" type={'number'} />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Site Web/ الموقع الالكتروني
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input value={person.website} placeholder="mysite" />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Nom du projet / اسم المشروع
      </Text>
      <Input placeholder="name" value={person.projectName} required/>
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
        value={person.activitie}
          placeholder={otherActivities}
          display={e => display(otherActivities, display)}
        ></Input>
      </Flex>
      <Text fontSize="xl" fontWeight="bold">
        Description courte du projet/ شرح مختصر للمشروع
      </Text>
      <Textarea value={person.projectDisc} placeholder="Description" />
      <Text fontSize="xl" fontWeight="bold">
        Présentation détaillé du projet et ses aspects d'innovation / العرض
        التفصيلي للمشروع وجوانب الابتكار فيه
      </Text>
      <Textarea value={person.presentation} placeholder="Présentation" />
      <Text fontSize="xl" fontWeight="bold">
        Avancement du projet / مدى تقدم المشروع
      </Text>
      <Textarea placeholder="Avancement du projet" />
      <Text fontSize="xl" fontWeight="bold">
        CV du/des fondateurs / السيرة الذاتية للمؤسسين
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input placeholder="link" />
        <InputRightAddon children=".com" />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Brevet (si il y en a) / براءة الاختراع ان وجدت
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input placeholder="link" />
        <InputRightAddon children=".com" />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Concours/récompenses / الجوائز و المسابقات
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input placeholder="link" />
        <InputRightAddon children=".com" />
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
        label(PDF)
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input placeholder="link" />
        <InputRightAddon children=".com" />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Autre
      </Text>
      <TagInput
        placeholder={'Autre'}
        tags={serials}
        colorScheme="teal"
        onTagsChange={handleTagsChange}
      />
    </>
  );
}

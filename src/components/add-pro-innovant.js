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
      <form>
        <Text fontSize="xl" fontWeight="bold">
          Année
        </Text>
        <Input placeholder="20XX" />
        <Text fontSize="xl" fontWeight="bold">
          Numero de label
        </Text>
        <Input placeholder="XXXXXXXXX" type={'number'} />
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
          Vous êtes/ صفتك
        </Text>
        <Grid gap={5}>
          <Select
            placeholder=""
            onChange={e => {
              setcoFounders(e.target.value);
            }}
          >
            <option value="option1">fondateur</option>
            <option value="Autre">co-fonadteur</option>
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
          <Input placeholder="email" />
        </InputGroup>
        <Text fontSize="xl" fontWeight="bold">
          Téléphone / الهاتف
        </Text>
        <InputGroup size="sm">
          <Input placeholder="phone" type={'number'} />
        </InputGroup>
        <Text fontSize="xl" fontWeight="bold">
          Site Web/ الموقع الالكتروني
        </Text>
        <InputGroup size="sm">
          <InputLeftAddon children="https://" />
          <Input placeholder="mysite" />
        </InputGroup>
        <Text fontSize="xl" fontWeight="bold">
          Nom du projet / اسم المشروع
        </Text>
        <Input placeholder="name" />
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
          Description courte du projet/ شرح مختصر للمشروع
        </Text>
        <Textarea placeholder="Description" />
        <Text fontSize="xl" fontWeight="bold">
          Présentation détaillé du projet et ses aspects d'innovation / العرض
          التفصيلي للمشروع وجوانب الابتكار فيه
        </Text>
        <Textarea placeholder="Présentation" />
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
        <Button
          type="submit"
          variant={'solid'}
          colorScheme={'teal'}
          size={'md'}
          onClick={async () => {
            console.log();
          }}
        >
          Add
        </Button>
      </form>

      <Button onClick={() => navigate('/')} variant={'solid'} size={'md'}>
        Return To LGLs
      </Button>
    </>
  );
};

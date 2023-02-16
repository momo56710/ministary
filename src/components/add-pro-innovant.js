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
import React from 'react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';

import Wilaya from './wilaya';
import { Stack, useColorModeValue } from '@chakra-ui/react';
export default () => {
  const text = useColorModeValue('dark', 'light');
  const options = Wilaya();
  const navigate = useNavigate();
  const [coFounder, setcoFounder] = useState([]);
  const [other, setother] = useState([]);
  const [otherActivities, setotherActivities] = useState([]);
  const [coFounders, setcoFounders] = useState([]);
  const [payload, setPayload] = useState({
    type: 'PI',
    num_label: '',
    year: '',
    role: 'fondateur',
    first_name: '',
    last_name: '',
    sex: 'Homme',
    email: '',
    phone: '',
    website: '',
    project_name: '',
    activity: 'fintech',
    description: '',
    presentation: '',
    advancement: '',
    cv: '',
    certificate: '',
    recompense: '',
    state: '',
    address: '',
    other: '',
  });
  const handleTagsChange = useCallback((event, tags) => {
    setcoFounder(tags);
    setother(tags)
  }, []);

  const display = (other, display) => {
    (other === 'Autre' || other === 'co-fondateur') ? (display = 'inline') : (display = 'none');
    return display;
  };
  return (
    <>
      <Text fontSize="xl" fontWeight="bold">
        Année
      </Text>
      <Input
        placeholder="20XX"
        onChange={e => {
          setPayload({ ...payload, year: e.target.value });
        }}
      />
      <Text fontSize="xl" fontWeight="bold">
        Numero de label
      </Text>
      <Input
        placeholder="XXXXXXXXX"
        onChange={e => {
          setPayload({ ...payload, num_label: e.target.value });
        }}
      />
      <Text fontSize="xl" fontWeight="bold">
        Nom/اللقب
      </Text>
      <Input
        placeholder="Nom"
        type={'text'}
        onChange={e => {
          setPayload({ ...payload, last_name: e.target.value });
        }}
      />
      <Text fontSize="xl" fontWeight="bold">
        Prénom /الاسم
      </Text>
      <Input
        placeholder="Prenom"
        onChange={e => {
          setPayload({ ...payload, first_name: e.target.value });
        }}
      />
      <Text fontSize="xl" fontWeight="bold">
        Genre
      </Text>
      <Select
        placeholder=""
        onChange={e => {
          setPayload({ ...payload, sex: e.target.value });
        }}
      >
        <option value="Homme" selected>Homme</option>
        <option value="femme">femme</option>
      </Select>
      <Text fontSize="xl" fontWeight="bold">
        Vous êtes/ صفتك
      </Text>
      <Grid gap={5}>
        <Select
          placeholder=""
          onChange={e => {
            setPayload({ ...payload, role: e.target.value });
            setcoFounders(e.target.value);
          }}
        >
          <option value="fondatuer">fondateur</option>
          <option value="co-fondateur">co-fonadteur</option>
        </Select>
        <TagInput
         
          display={display(coFounders, display)}
          placeholder={'Autres co-fondateurs / المؤسسون الاخرون'}
          tags={coFounder}
          colorScheme="teal"
          onTagsChange={handleTagsChange}
        />
      </Grid>
      <Text fontSize="xl" fontWeight="bold">
        E-mail / البريد الالكتروني
      </Text>
      <InputGroup>
        <Input
          placeholder="email"
          onChange={e => {
            setPayload({ ...payload, email: e.target.value });
          }}
        />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Téléphone / الهاتف
      </Text>
      <InputGroup size="sm">
        <Input
          placeholder="phone"
          type={'number'}
          onChange={e => {
            setPayload({ ...payload, phone: e.target.value });
          }}
        />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Site Web/ الموقع الالكتروني
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input
          placeholder="mysite"
          onChange={e => {
            setPayload({ ...payload, website: e.target.value });
          }}
        />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Nom du projet / اسم المشروع
      </Text>
      <Input
        placeholder="name"
        onChange={e => {
          setPayload({ ...payload, project_name: e.target.value });
        }}
      />
      <Text fontSize="xl" fontWeight="bold">
        Secteur d'activité / مجال العمل
      </Text>
      <Flex gap={4}>
        <Select
          value={otherActivities}
          onChange={e => {
            setPayload({ ...payload, activity: e.target.value });
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
          onChange={e => {
            setPayload({ ...payload, activity: e.target.value });
          }}
        ></Input>
      </Flex>
      <Text fontSize="xl" fontWeight="bold">
        Description courte du projet/ شرح مختصر للمشروع
      </Text>
      <Textarea placeholder="Description"  onChange={e => {
          setPayload({ ...payload, description: e.target.value });
        }}/>
      <Text fontSize="xl" fontWeight="bold">
        Présentation détaillé du projet et ses aspects d'innovation / العرض
        التفصيلي للمشروع وجوانب الابتكار فيه
      </Text>
      <Textarea
        placeholder="Présentation"
        onChange={e => {
          setPayload({ ...payload, presentation: e.target.value });
        }}
      />
      <Text fontSize="xl" fontWeight="bold">
        Avancement du projet / مدى تقدم المشروع
      </Text>
      <Textarea
        placeholder="Avancement du projet"
        onChange={e => {
          setPayload({ ...payload, advancement: e.target.value });
        }}
      />
      <Text fontSize="xl" fontWeight="bold">
        CV du/des fondateurs / السيرة الذاتية للمؤسسين
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input
          placeholder="link"
          onChange={e => {
            setPayload({ ...payload, cv: e.target.value });
          }}
        />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Brevet (si il y en a) / براءة الاختراع ان وجدت
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input
          placeholder="link"
          onChange={e => {
            setPayload({ ...payload, certificate: e.target.value });
          }}
        />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Concours/récompenses / الجوائز و المسابقات
      </Text>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input
          placeholder="link"
          onChange={e => {
            setPayload({ ...payload, recompense: e.target.value });
          }}
        />
      </InputGroup>
      <Text fontSize="xl" fontWeight="bold">
        Wilaya / الولاية
      </Text>
      <Stack direction="column">
        <AutoComplete rollNavigation>
          <AutoCompleteInput
            placeholder="Wilaya"
            onChange={e => {
              setPayload({ ...payload, state: e.target.value });
            }}
          />
          <AutoCompleteList>
            {Object.keys(options).map(option => {
              return (
                <AutoCompleteItem
                  key={options[option].id}
                  value={`${options[option].code}-${options[option].name}`}
                  label={`${options[option].name}`}
                  textTransform="capitalize"
                >
                  {`${options[option].name}`}
                </AutoCompleteItem>
              );
            })}
          </AutoCompleteList>
        </AutoComplete>
      </Stack>
      <Text fontSize="xl" fontWeight="bold">
        Adresse / العنوان
      </Text>
      <Input
        placeholder="Adresse"
        onChange={e => {
          setPayload({ ...payload, address: e.target.value });
        }}
      />
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
      <Input
          placeholder=""
          onChange={e => {
            setPayload({ ...payload, other: e.target.value });
          }}
        />
      <Button
        type="submit"
        variant={'solid'}
        colorScheme={'teal'}
        size={'md'}
        onClick={async () => {
          console.log({...payload,coFondateur : coFounder});
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

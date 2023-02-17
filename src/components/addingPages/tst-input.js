import { useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect, useRef } from 'react';

import activities from '../data/activities';
import TagInput from '../input';
import {
  Text,
  Input,
  Button,
  Textarea,
  Select,
  Grid,
  Flex,
  Box,
  Center,
  background,
  color,
} from '@chakra-ui/react';
import React from 'react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
import NavBar from '../nav';
import { getSession } from '../../utils/auth.js';
import pdfIcon from '../../Assets/pdf.png';
import Wilaya from '../data/wilaya';
import { Stack, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import { InputLabel } from '@mui/material';
import { height } from '@mui/system';
export default () => {
  // useEffect(() => {
  //   if (!getSession()?.token) navigate('/login');
  //   else setSession(getSession());
  // });
  const [session, setSession] = useState('');
  const text = useColorModeValue('dark', 'light');
  const options = Wilaya();
  const navigate = useNavigate();
  const [coFounder, setCoFounder] = useState([]);
  const [otherActivities, setOtherActivities] = useState([]);
  const [coFounders, setCoFounders] = useState([]);
  const [payload, setPayload] = useState({
    type: 'PI',
    num_label: '',
    year: '',
    role: 'founder',
    first_name: '',
    last_name: '',
    sex: 'male',
    email: '',
    phone: '',
    website: '',
    project_name: '',
    activity: 'Fintech',
    description: '',
    presentation: '',
    advancement: 'Concept/Idée',
    cv: '',
    certificate: '',
    recompense: '',
    state: '',
    address: '',
    other: '',
  });
  const handleTagsChange = useCallback((event, tags) => {
    setCoFounder(tags);
    setOtherActivities(tags);
  }, []);

  const display = (other, display) => {
    other === 'Autre' || other === 'coFounder'
      ? (display = 'inline')
      : (display = 'none');
    return display;
  };
  const [input, setInput] = useState([]);
  const [labelVisible, setLabelVisible] = useState(['none']);
  const [textAreaVisible, settextAreaVisible] = useState([]);

  return (
    <>
      <NavBar email={session.email}></NavBar>

      <Box>
        <Center>
          <Box w="80vw" h="100%" borderWidth="1px" borderRadius="lg">
            <Text fontSize="2xl" p={5} textAlign={'center'} fontWeight="bold">
              Ajouter Label Projet Innovent
            </Text>
            <Box
              w="100%"
              h="100%"
              borderTopLeftRadius="lg"
              borderTopRightRadius="lg"
              p={4}
            >
              <Grid gap={6}>
                <Text fontSize="xl" fontWeight="bold">
                  Description courte du projet/ شرح مختصر للمشروع
                </Text>
                <Grid
                  gridTemplateColumns={'4fr 1fr'}
                  gap={2}
                  alignItems={'center'}
                  justifyItems={'center'}
                >
                  <Box display={labelVisible} w={'100%'}>
                    <label
                      className="css-wqpdoh"
                      for="pdf"
                      style={{
                        width: '100%',
                        cursor: 'pointer',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      Import file
                      <Input
                        id="pdf"
                        display={'none'}
                        placeholder="Upload"
                        type={'file'}
                        pt={'0.3em'}
                      />
                    </label>
                  </Box>

                  <Textarea
                    display={textAreaVisible}
                    placeholder="Description"
                    type={input}
                    pt={'0.3em'}
                  />
                  <Select
                    onChange={e => {
                      if (e.target.value === 'pdf') {
                        settextAreaVisible('none');
                        setLabelVisible('grid');
                      } else {
                        settextAreaVisible('inline');
                        setLabelVisible('none');
                      }
                    }}
                  >
                    <option value="link">lien/text</option>
                    <option value="pdf">file</option>
                  </Select>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
};

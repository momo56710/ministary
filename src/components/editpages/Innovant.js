import React from 'react';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { getSession } from '../../utils/auth';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
  Checkbox,
} from '@chakra-ui/react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
import NavBar from '../nav';
import Wilaya from '../data/wilaya';
import { Stack, useColorModeValue } from '@chakra-ui/react';
export default () => {
  let [session, setSession] = useState('');
  const text = useColorModeValue('dark', 'light');
  const options = Wilaya();
  const navigate = useNavigate();
  const [fileName, setfileName] = useState([]);
  const [otherActivities, setOtherActivities] = useState([]);
  const [coFounders, setCoFounders] = useState([]);
  const [payload, setPayload] = useState({});
  const handleTagsChange = useCallback((event, tags) => {
    setCoFounder(tags);
  }, []);

  const display = (other, display) => {
    other === 'Autre' || other === 'coFounder'
      ? (display = 'inline')
      : (display = 'none');
    return display;
  };
  const [editable, setEditable] = useState(true);
  const [loading, setLoading] = useState(true);
  const [document, setDocument] = useState();
  const [coFounder, setCoFounder] = useState();
  const [visibale, setVisibale] = useState('none');
  const { _id } = useParams();

  useEffect(() => {
    session = getSession();

    axios
      .get('https://api.stingo.vip/api/document/pi/' + _id, {
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      })
      .then(res => {
        setDocument(res.data.doc);
        setLoading(false);
        setCoFounder([...res.data.doc.coFounders]);
        setPayload(res.data.doc);
        setSession(getSession());
      })
      .catch(err => console.log(err));
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      <NavBar email={session.email}></NavBar>
      {console.log(document)}
      <Box>
        <Center>
          <Box w="80vw" h="100%" borderWidth="1px" borderRadius="lg">
            <Text fontSize="2xl" p={5} textAlign={'center'} fontWeight="bold">
              Editer Label Projet Innovent
            </Text>

            <Box
              w="100%"
              h="100%"
              borderTopLeftRadius="lg"
              borderTopRightRadius="lg"
              p={4}
            >
              <Grid gap={6}>
                <Checkbox
                  onChange={e => {
                    e.target.checked ? setEditable(false) : setEditable(true);
                    e.target.checked
                      ? setVisibale('inline')
                      : setVisibale('none');
                  }}
                >
                  <Text fontSize="xl" fontWeight="bold">
                    Edit
                  </Text>
                </Checkbox>

                <Text fontSize="xl" fontWeight="bold">
                  Ann??e
                </Text>
                <Input
                  placeholder="20XX"
                  disabled={editable}
                  defaultValue={document.year}
                  onChange={e => {
                    setPayload({ ...payload, year: e.target.value });
                  }}
                />
                <Text fontSize="xl" fontWeight="bold">
                  Numero de label
                </Text>
                <Input
                  defaultValue={document.num_label}
                  disabled={editable}
                  placeholder="XXXXXXXXX"
                  onChange={e => {
                    setPayload({ ...payload, num_label: e.target.value });
                  }}
                />
                <Text fontSize="xl" fontWeight="bold">
                  Nom/??????????
                </Text>
                <Input
                  defaultValue={document.last_name}
                  disabled={editable}
                  placeholder="Nom"
                  type={'text'}
                  onChange={e => {
                    setPayload({ ...payload, last_name: e.target.value });
                  }}
                />
                <Text fontSize="xl" fontWeight="bold">
                  Pr??nom /??????????
                </Text>
                <Input
                  defaultValue={document.first_name}
                  disabled={editable}
                  placeholder="Prenom"
                  onChange={e => {
                    setPayload({ ...payload, first_name: e.target.value });
                  }}
                />
                <Text fontSize="xl" fontWeight="bold">
                  Genre
                </Text>
                <Select
                  defaultValue={document.sex}
                  disabled={editable}
                  placeholder=""
                  onChange={e => {
                    setPayload({ ...payload, sex: e.target.value });
                  }}
                >
                  <option value="male" selected>
                    Homme
                  </option>
                  <option value="female">femme</option>
                </Select>
                <Text fontSize="xl" fontWeight="bold">
                  Vous ??tes/ ????????
                </Text>
                <Grid gap={5}>
                  <Select
                    defaultValue={document.role}
                    disabled={editable}
                    placeholder=""
                    onChange={e => {
                      setPayload({ ...payload, role: e.target.value });
                      setCoFounders(e.target.value);
                    }}
                  >
                    <option value="founder">fondateur</option>
                    <option value="coFounder">co-fonadteur</option>
                  </Select>
                  <TagInput
                    disabled={editable}
                    placeholder={'Autres co-fondateurs / ???????????????? ??????????????'}
                    tags={coFounder}
                    colorScheme="teal"
                    onTagsChange={handleTagsChange}
                  />
                </Grid>
                <Text fontSize="xl" fontWeight="bold">
                  E-mail / ???????????? ????????????????????
                </Text>

                <Input
                  defaultValue={document.email}
                  disabled={editable}
                  placeholder="email"
                  onChange={e => {
                    setPayload({ ...payload, email: e.target.value });
                  }}
                />

                <Text fontSize="xl" fontWeight="bold">
                  T??l??phone / ????????????
                </Text>

                <Input
                  defaultValue={document.phone}
                  disabled={editable}
                  placeholder="phone"
                  type={'number'}
                  onChange={e => {
                    setPayload({ ...payload, phone: e.target.value });
                  }}
                />

                <Text fontSize="xl" fontWeight="bold">
                  Site Web/ ???????????? ????????????????????
                </Text>

                <Input
                  defaultValue={document.website}
                  disabled={editable}
                  placeholder="mysite"
                  onChange={e => {
                    setPayload({ ...payload, website: e.target.value });
                  }}
                />

                <Text fontSize="xl" fontWeight="bold">
                  Nom du projet / ?????? ??????????????
                </Text>
                <Input
                  defaultValue={document.project_name}
                  disabled={editable}
                  placeholder="name"
                  onChange={e => {
                    setPayload({ ...payload, project_name: e.target.value });
                  }}
                />
                <Text fontSize="xl" fontWeight="bold">
                  Secteur d'activit?? / ???????? ??????????
                </Text>
                <Flex gap={4}>
                  <Select
                    defaultValue={document.activity}
                    disabled={editable}
                    value={otherActivities}
                    onChange={e => {
                      setPayload({ ...payload, activity: e.target.value });
                      setOtherActivities(e.target.value);
                    }}
                  >
                    {activities().map((val, i) => {
                      return <option value={val}>{`${val}`}</option>;
                    })}
                    <option value="Autre">Autre</option>
                  </Select>
                  <Input
                    defaultValue={document.activity}
                    disabled={editable}
                    placeholder={otherActivities}
                    display={e => display(otherActivities, display)}
                    onChange={e => {
                      setPayload({ ...payload, activity: e.target.value });
                    }}
                  ></Input>
                </Flex>
                <Text fontSize="xl" fontWeight="bold">
                  Description courte du projet/ ?????? ?????????? ??????????????
                </Text>
                <Textarea
                  defaultValue={document.description}
                  disabled={editable}
                  placeholder="Description"
                  onChange={e => {
                    setPayload({ ...payload, description: e.target.value });
                  }}
                />
                <Text fontSize="xl" fontWeight="bold">
                  Pr??sentation d??taill?? du projet et ses aspects d'innovation /
                  ?????????? ???????????????? ?????????????? ???????????? ???????????????? ??????
                </Text>
                <Textarea
                  defaultValue={document.presentation}
                  disabled={editable}
                  placeholder="Pr??sentation"
                  onChange={e => {
                    setPayload({ ...payload, presentation: e.target.value });
                  }}
                />
                <Text fontSize="xl" fontWeight="bold">
                  Avancement du projet / ?????? ???????? ??????????????
                </Text>
                <Select
                  defaultValue={document.advancement}
                  disabled={editable}
                  onChange={e => {
                    setPayload({ ...payload, advancement: e.target.value });
                  }}
                >
                  <option value={'Concept/Id??e'}>Concept/Id??e</option>
                  <option value={'Prototype en d??vloppement'}>
                    Prototype en d??vloppement
                  </option>
                  <option value={'Prototype pr??t'}>Prototype pr??t</option>
                  <option value={'Produit sur le march??'}>
                    Produit sur le march??
                  </option>
                </Select>
                <Text fontSize="xl" fontWeight="bold">
                  CV du/des fondateurs / ???????????? ?????????????? ????????????????
                </Text>

                <Input
                  defaultValue={document.cv}
                  disabled={editable}
                  placeholder="link"
                  onChange={e => {
                    setPayload({ ...payload, cv: e.target.value });
                  }}
                />

                <Text fontSize="xl" fontWeight="bold">
                  Brevet (si il y en a) / ?????????? ???????????????? ???? ????????
                </Text>

                <Input
                  defaultValue={document.certificate}
                  disabled={editable}
                  placeholder="link"
                  onChange={e => {
                    setPayload({ ...payload, certificate: e.target.value });
                  }}
                />

                <Text fontSize="xl" fontWeight="bold">
                  Concours/r??compenses / ?????????????? ?? ??????????????????
                </Text>

                <Input
                  defaultValue={document.recompense}
                  disabled={editable}
                  placeholder="link"
                  onChange={e => {
                    setPayload({ ...payload, recompense: e.target.value });
                  }}
                />

                <Text fontSize="xl" fontWeight="bold">
                  Wilaya / ??????????????
                </Text>
                <Stack direction="column">
                  <AutoComplete rollNavigation>
                    <AutoCompleteInput
                      Value={document.state}
                      disabled={editable}
                      placeholder="Wilaya"
                      onBlur={e => {
                        setTimeout(() => {
                          setPayload({ ...payload, state: e.target.value });
                        }, 400);
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
                            onClick={() =>
                              setPayload({
                                ...payload,
                                state: options[option].name,
                              })
                            }
                          >
                            {`${options[option].name}`}
                          </AutoCompleteItem>
                        );
                      })}
                    </AutoCompleteList>
                  </AutoComplete>
                </Stack>
                <Text fontSize="xl" fontWeight="bold">
                  Adresse / ??????????????
                </Text>
                <Input
                  defaultValue={document.address}
                  disabled={editable}
                  placeholder="Adresse"
                  onChange={e => {
                    setPayload({ ...payload, address: e.target.value });
                  }}
                />
                <Text fontSize="xl" fontWeight="bold">
                  label(PDF)
                </Text>
                <Grid templateColumns={'2fr 1fr'} gap={8}>
                  <Input
                    type="text"
                    textAlign={'center'}
                    readOnly
                    value={fileName.toString().substring(12, 1000)}
                  />
                  <label
                    className="css-wqpdoh"
                    for="pdf"
                    style={{
                      cursor: 'pointer',
                      display: 'grid',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Import
                    <Input
                      id="pdf"
                      display={'none'}
                      placeholder="Upload"
                      type={'file'}
                      pt={'0.3em'}
                      onChange={e => {
                        setfileName(e.target.value);
                      }}
                    />
                  </label>
                </Grid>

                <Text fontSize="xl" fontWeight="bold">
                  Autre
                </Text>
                <Input
                  defaultValue={document.other}
                  disabled={editable}
                  placeholder=""
                  onChange={e => {
                    setPayload({ ...payload, other: e.target.value });
                  }}
                />
                <Grid>
                  <Button
                    display={visibale}
                    variant={'solid'}
                    colorScheme={'teal'}
                    size={'md'}
                    onClick={async () => {
                      const s = { ...payload };
                      delete s.__v;
                      try {
                        console.log({ ...payload, coFondateur: coFounder });
                        const res = await axios.post(
                          'https://api.stingo.vip/api/update',
                          s,
                          {
                            headers: {
                              Authorization: `Bearer ${session.token}`,
                            },
                          }
                        );
                        console.log({ res });
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    display={visibale}
                    variant={'solid'}
                    colorScheme={'teal'}
                    size={'md'}
                    onClick={async () => {
                      try {
                        console.log({ ...payload, coFondateur: coFounder });
                        const res = await axios.post(
                          'https://api.stingo.vip/api/delete',
                          { type: document.type, _id: document._id },
                          {
                            headers: {
                              Authorization: `Bearer ${session.token}`,
                            },
                          }
                        );
                        console.log({ res });
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    delete
                  </Button>
                  <Button colorScheme={'red'}>Download PDF</Button>
                  <Button
                    onClick={() => navigate('/dashboard')}
                    variant={'solid'}
                    size={'md'}
                  >
                    Return To Manager
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
};

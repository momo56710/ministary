import React from 'react';
import NavBar from '../components/nav';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import Autocomplete from '../components/autocomplete.js';
import activities from '../components/data/activities';
import TagInput from '../components/input';
import {
  Text,
  Input,
  Textarea,
  Select,
  Grid,
  Flex,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/react';

export default function Edit({ person }) {
  const [session, setSession] = useState('');
 
  const navigate = useNavigate()
  const [coFounder, setCoFounder] = useState([]);
  const [fileName, setfileName] = useState([]);

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

  return <></>;
}

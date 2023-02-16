import React from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  
} from "@choc-ui/chakra-autocomplete";

import Wilaya from "./wilaya";
import { Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function App() {
  const text = useColorModeValue('dark', 'light');
  const options = Wilaya();
  return (
    <Stack direction="column">
      <AutoComplete rollNavigation>
        <AutoCompleteInput
          placeholder="Wilaya"
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
          )})}
        </AutoCompleteList>
      </AutoComplete>
    </Stack>
  );
}

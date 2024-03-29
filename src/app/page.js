'use client';
import {
  Box,
  Text,
  Heading,
  Center,
  Button,
  Stack,
  Modal,
  ModalBody,
  Lorem,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalFooter,
  UnorderedList,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from './lib/chakra-components';
import Link from 'next/link';
import { useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';
import { ThemeContext } from './context/theme-context';
export default function Home() {
  const { toggleMode } = useContext(ThemeContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center className="h-full p-4 dark:bg-gray-950">
      <Stack direction="column" gap="6">
        <Stack gap="4">
          <Heading
            className="dark:text-gray-300 text-red font-bold text-gray-800 text-4xl text-center"
            as="h1"
          >
            POC para probar la compatibilidad de Tailwind CSS y Chakra UI.
          </Heading>
          <Text as="p" className="text-center font-medium text-gray-500">
            Propuesta para trabajar con ambas tecnologías.
          </Text>
          <Button onClick={() => toggleMode()} className="mr-auto dark:bg-blue-600 dark:text-white">
            Dark Mode
          </Button>
        </Stack>
        <Box>
          <Heading
            as="h3"
            className="dark:text-gray-300 text-lg font-bold mb-4 text-gray-700"
            size="md"
          >
            ¿Qué ventajas nos ofrecería trabajar con ambas librerías?
          </Heading>
          <UnorderedList>
            <ListItem className="dark:text-gray-400">
              La migración a V2 sería mucho más sencilla ya que hay bastantes componentes de Chakra
              que se pueden reutilizar.
            </ListItem>
            <ListItem className="dark:text-gray-400">
              Tendríamos la versatilidad de los estilos en línea de tailwind. Aunque ya estaban en
              Chakra puede que a algunos se les haga más cómodo por se un framework más
              estandarizado.
            </ListItem>
            <ListItem className="dark:text-gray-400">
              Ganaríamos la facilidad de los Layouts de Chakra.{' '}
              {`<Box />, <Center />, <Flex />, <Stack />`} etc.
            </ListItem>
          </UnorderedList>
          <Heading
            className="dark:text-gray-300 mb-4 mt-4 text-lg font-bold text-gray-700"
            size="md"
          >
            ¿Qué desventajas podría presentar?
          </Heading>
          <UnorderedList>
            <ListItem className="dark:text-gray-400">
              Actualmente no existe soporte para utilizar los componentes de chakra como{' '}
              <Link
                target="_BLANK"
                className="text-purple-600"
                href="https://www.freecodecamp.org/espanol/news/que-son-react-server-components/"
              >
                Server Componentes.
              </Link>
              . Lo cual los obligaría a reexportar los componentes desde un fichero con la directiva
              "use client". Como vimos en V1, trabajar de esta forma no presentó mayores problemas
              que los de rehidratación.
            </ListItem>
          </UnorderedList>
        </Box>
        <Heading
          as="h3"
          className="dark:text-gray-300 text-lg font-bold mb-1 text-gray-700"
          size="md"
        >
          Prueba aquí abajo los componentes!
        </Heading>
        <Stack direction="column" gap="6">
          <Stack direction="row" gap="6">
            <Stack>
              <Button className="bg-violet-500 text-violet-50 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                Click on me!
              </Button>
              <Text as="small" className="dark:text-gray-400">
                Button with Tailwind Styles
              </Text>
            </Stack>
            <Stack>
              <Button variant="outline">Secondary Button</Button>
              <Text as="small" className="dark:text-gray-400">
                Button with default Chakra Styles
              </Text>
            </Stack>
          </Stack>
          <Stack className="items-start">
            <Menu>
              <MenuButton
                as={Button}
                className="bg-violet-500 text-violet-50 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
              >
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem className="text-blue-600 hover:bg-blue-100">Download</MenuItem>
                <MenuItem className="text-green-600">Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem className="text-red-600 ">Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            <Text as="small" className="dark:text-gray-400">
              Menu with Talwind CSS
            </Text>
          </Stack>

          <Stack className="items-start">
            <Button onClick={onOpen} className="dark:text-gray-200">
              Open Modal
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader className="text-blue-600 ">Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Paragraph</Text>
                </ModalBody>

                <ModalFooter>
                  <Button
                    variant="solid"
                    className="bg-blue-700 text-white"
                    mr={3}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Text as="small" className="dark:text-gray-400">
              Modal with some tailwind styles
            </Text>
          </Stack>
        </Stack>
        <Box>
          <Text as="p" className="mt-8 font-normal text-gray-400 dark:text-gray-400">
            * Pueden responder al comentario sobre esta idea. También pueden usar este
            misma POC para probar libremente y repotar algún bug o cosa de interés
          </Text>
        </Box>
      </Stack>
    </Center>
  );
}

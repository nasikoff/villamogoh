import { FC } from 'react';
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { BroneIcon2 } from "./icons";
import { useDisclosure } from "@nextui-org/react";

interface BookingButtonProps {
  text: string;
}

const BookingButton: FC<BookingButtonProps> = ({ text }) => {
    const items = [
        {
            key: "new",
            label: "Cottage One",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3 4.001a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zM13.5 7a1 1 0 0 0-1.707-.707l-2 2a1 1 0 0 0 1.414 1.414l.293-.293V17a1 1 0 1 0 2 0z" clip-rule="evenodd"/></svg>,
        },
        {
            key: "copy",
            label: "Cottage Two",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3 4.001a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm7.94 4.438a1.5 1.5 0 0 1 2.12 2.122l-3.828 3.828a2.5 2.5 0 0 0-.732 1.768V17a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-3.975a.5.5 0 0 1 .121-.197l3.829-3.828A3.5 3.5 0 1 0 8.5 9.5a1 1 0 1 0 2 0c0-.385.146-.768.44-1.06" clip-rule="evenodd"/></svg>,
        },
        {
            key: "edit",
            label: "Russian Bathhouse",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512"><path fill="currentColor" d="M273.38 368.37c-.81-9.23-8.86-16.44-18.55-16.44a18.63 18.63 0 0 0-18.2 14.07l-18.2 88.36a35.6 35.6 0 0 0-.93 7.87c0 19.93 16.68 33.77 37.33 33.77s37.34-13.84 37.34-33.77a36.2 36.2 0 0 0-1.29-9.45Zm137.67 39.52a42.7 42.7 0 0 0-5.95-4.36L335.57 355c-6.77-4.24-14-4.13-19.25 1a13.52 13.52 0 0 0-2 17.19l52.5 69a38 38 0 0 0 4 4.69c9.1 10.16 29.28 10.72 40.37 0c10.94-10.96 10.81-30.39-.14-38.99m52.25-71.96h-70.42c-4.55 0-8.88 3.35-8.88 8.15s2.95 7.85 6.92 9.16l66.43 20.55C467 376 480 367.44 480 356.71c0-13.63-7.6-20.78-16.7-20.78m-335.08 8.15c0-4.95-4.55-8.15-9.45-8.15H48.35c-8.87 0-16.35 9.58-16.35 20.31S44.62 376 54.3 373.79l67.43-20.55c4.39-1.31 6.49-4.24 6.49-9.16m48.33 10.97L107 403.41a32.3 32.3 0 0 0-6 4.34a26.33 26.33 0 0 0 0 38.56a29.41 29.41 0 0 0 40.36 0a31 31 0 0 0 4-4.68L197.9 373c3.5-5.57 2.92-12.48-2-17a15 15 0 0 0-19.35-.95m116.91-112.66c10-5.42 19.45-10.54 28.31-16.16c42.46-26.92 62.23-59 62.23-101c0-64.66-56.07-104.4-108.82-109c-6.49-.57-15-.42-19.91 3.88s-5.88 12.56-6.15 19.1c-1.38 33.61-28.38 59-57 85.86c-28 26.3-56.93 53.49-62.71 91c-8.41 54.68 21.74 86.71 40.46 100.93a31.88 31.88 0 0 0 19.3 6.51a32.3 32.3 0 0 0 7.41-.87a31.75 31.75 0 0 0 21.27-16.95c14.91-30.39 45.77-47.12 75.61-63.3"/><path fill="currentColor" d="M139.82 156.57c12.22-15.76 27-29.68 41.37-43.15c19.92-18.72 37.81-35.58 46.5-53.86c-12.24-7.37-27.36-11.36-46.51-11.36c-17.79 0-20.39 5.18-20.39 19.06c0 12.56-6.53 20.54-14.34 30.65C137.8 109.1 128 121.77 128 140.84c0 10.23 1.29 18.77 4.2 26.37q3.5-5.32 7.62-10.64m190.52 83.17c-9.33 5.92-19 11.16-29.25 16.71c-28.91 15.68-56.21 30.48-68.88 56.28a63 63 0 0 1-1.88 3.61a8 8 0 0 0 3.89 11.3c12.31 5.1 25.13 8.27 38.91 8.27a111.42 111.42 0 0 0 78.24-31.37A107.45 107.45 0 0 0 384 226.85a86.6 86.6 0 0 0-1.33-15a8 8 0 0 0-13.8-4c-10.18 11.47-22.93 22-38.53 31.89"/></svg>,
        },
        {
            key: "delete",
            label: "Закрыть окно",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>,
        }
      ];
    

  // Используем хук useDisclosure для создания переменных состояния модальных окон
  const modal1Disclosure = useDisclosure();
  const modal2Disclosure = useDisclosure();
  const modal3Disclosure = useDisclosure();

  const handleItemClick = (key: string) => {
    if (key === "new") {
      modal1Disclosure.onOpen(); // Открываем модальное окно 1
    } else if (key === "copy") {
      modal2Disclosure.onOpen(); // Открываем модальное окно 2
    }
    else if (key === "edit") {
        modal3Disclosure.onOpen(); // Открываем модальное окно 3
      }
  };

  return (
    <>
      <Dropdown backdrop="opaque">
        <DropdownTrigger>
          <Button className='min-w-[60px]' color="primary"><BroneIcon2/>{text}</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={items}>
          {(item) => (
            <DropdownItem
              key={item.key}
              color={item.key === "delete" ? "danger" : "default"}
              className={item.key === "delete" ? "text-danger" : ""}
              onClick={() => handleItemClick(item.key)}
            >
              <div className='flex gap-2'>{item.svg}{item.label}</div>
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>

      {/* Модальное окно 1 */}
      <Modal isOpen={modal1Disclosure.isOpen} onClose={modal1Disclosure.onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Вы бронируете номер 1</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

     {/* Модальное окно 1 */}
     <Modal isOpen={modal2Disclosure.isOpen} onClose={modal2Disclosure.onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Вы бронируете номер 2</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Модальное окно 3 */}
      <Modal isOpen={modal3Disclosure.isOpen} onClose={modal3Disclosure.onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Вы бронируете номер 3</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default BookingButton;
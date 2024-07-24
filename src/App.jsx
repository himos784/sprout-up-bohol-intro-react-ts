import { useState } from 'react';
import { Button, Checkbox, Dropdown, Label, Modal, Radio, Select, Table, Textarea, TextInput } from "flowbite-react";
import './App.css'
import { HiOutlineExclamationCircle, HiDotsVertical } from 'react-icons/hi';
import data from '../resources/data.json';

function App() {
    const [showFormModal, setShowFormModal] = useState(false);
    const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
    // to be used for dynamically show data on the table
    // const [users, setUsers] = useState(data);

    const toggleFormModalClickHandler = () => {
        setShowFormModal(!showFormModal);
    }

    const toggleDeleteConfirmationClickHandler = () => {
        setShowDeleteConfirmationModal(!showDeleteConfirmationModal);
    }

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex justify-end mb-2">
                    <Button onClick={toggleFormModalClickHandler} color="blue" className="mb-2">Create</Button>
                </div>

                <Table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <Table.Head className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <Table.HeadCell className="px-6 py-3">Name</Table.HeadCell>
                        <Table.HeadCell className="px-6 py-3">Address</Table.HeadCell>
                        <Table.HeadCell className="px-6 py-3">Civil Status</Table.HeadCell>
                        <Table.HeadCell className="px-6 py-3">Age Group</Table.HeadCell>
                        <Table.HeadCell className="px-6 py-3">Options</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <Table.Cell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">John Doe</Table.Cell>
                            <Table.Cell className="px-6 py-4">123 Elm Street</Table.Cell>
                            <Table.Cell className="px-6 py-4">Single</Table.Cell>
                            <Table.Cell className="px-6 py-4">18-25</Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                <Dropdown
                                    label=""
                                    dismissOnClick={true}
                                    renderTrigger={() => (
                                        <Button outline className="border-transparent bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                            <HiDotsVertical />
                                        </Button>
                                    )}>
                                    <Dropdown.Item onClick={toggleFormModalClickHandler}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={toggleDeleteConfirmationClickHandler}>Delete</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <Table.Cell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Jane Smith</Table.Cell>
                            <Table.Cell className="px-6 py-4">456 Oak Avenue</Table.Cell>
                            <Table.Cell className="px-6 py-4">Married</Table.Cell>
                            <Table.Cell className="px-6 py-4">26-35</Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                <Dropdown
                                    label=""
                                    dismissOnClick={true}
                                    renderTrigger={() => (
                                        <Button outline className="border-transparent bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                            <HiDotsVertical />
                                        </Button>
                                    )}>
                                    <Dropdown.Item onClick={toggleFormModalClickHandler}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={toggleDeleteConfirmationClickHandler}>Delete</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <Table.Cell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Alice Johnson</Table.Cell>
                            <Table.Cell className="px-6 py-4">789 Pine Lane</Table.Cell>
                            <Table.Cell className="px-6 py-4">Single</Table.Cell>
                            <Table.Cell className="px-6 py-4">36-45</Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                <Dropdown
                                    label=""
                                    dismissOnClick={true}
                                    renderTrigger={() => (
                                        <Button outline className="border-transparent bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                            <HiDotsVertical />
                                        </Button>
                                    )}>
                                    <Dropdown.Item onClick={toggleFormModalClickHandler}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={toggleDeleteConfirmationClickHandler}>Delete</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <Table.Cell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Bob Brown</Table.Cell>
                            <Table.Cell className="px-6 py-4">101 Maple Drive</Table.Cell>
                            <Table.Cell className="px-6 py-4">Divorced</Table.Cell>
                            <Table.Cell className="px-6 py-4">46-55</Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                <Dropdown
                                    label=""
                                    dismissOnClick={true}
                                    renderTrigger={() => (
                                        <Button outline className="border-transparent bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                            <HiDotsVertical />
                                        </Button>
                                    )}>
                                    <Dropdown.Item onClick={toggleFormModalClickHandler}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={toggleDeleteConfirmationClickHandler}>Delete</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <Table.Cell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Eve Davis</Table.Cell>
                            <Table.Cell className="px-6 py-4">202 Cedar Court</Table.Cell>
                            <Table.Cell className="px-6 py-4">Married</Table.Cell>
                            <Table.Cell className="px-6 py-4">56-65</Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                <Dropdown
                                    label=""
                                    dismissOnClick={true}
                                    renderTrigger={() => (
                                        <Button outline className="border-transparent bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                            <HiDotsVertical />
                                        </Button>
                                    )}>
                                    <Dropdown.Item onClick={toggleFormModalClickHandler}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={toggleDeleteConfirmationClickHandler}>Delete</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <Table.Cell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Frank Wilson</Table.Cell>
                            <Table.Cell className="px-6 py-4">303 Birch Boulevard</Table.Cell>
                            <Table.Cell className="px-6 py-4">Single</Table.Cell>
                            <Table.Cell className="px-6 py-4">66-75</Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                <Dropdown
                                    label=""
                                    dismissOnClick={true}
                                    renderTrigger={() => (
                                        <Button outline className="border-transparent bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                            <HiDotsVertical />
                                        </Button>
                                    )}>
                                    <Dropdown.Item onClick={toggleFormModalClickHandler}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={toggleDeleteConfirmationClickHandler}>Delete</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <Table.Cell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Grace Lee</Table.Cell>
                            <Table.Cell className="px-6 py-4">404 Redwood Road</Table.Cell>
                            <Table.Cell className="px-6 py-4">Widowed</Table.Cell>
                            <Table.Cell className="px-6 py-4">76-85</Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                <Dropdown
                                    label=""
                                    dismissOnClick={true}
                                    renderTrigger={() => (
                                        <Button outline className="border-transparent bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                            <HiDotsVertical />
                                        </Button>
                                    )}>
                                    <Dropdown.Item onClick={toggleFormModalClickHandler}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={toggleDeleteConfirmationClickHandler}>Delete</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <Table.Cell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Henry Martinez</Table.Cell>
                            <Table.Cell className="px-6 py-4">505 Spruce Street</Table.Cell>
                            <Table.Cell className="px-6 py-4">Single</Table.Cell>
                            <Table.Cell className="px-6 py-4">18-25</Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                <Dropdown
                                    label=""
                                    dismissOnClick={true}
                                    renderTrigger={() => (
                                        <Button outline className="border-transparent bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                            <HiDotsVertical />
                                        </Button>
                                    )}>
                                    <Dropdown.Item onClick={toggleFormModalClickHandler}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={toggleDeleteConfirmationClickHandler}>Delete</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <Table.Cell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Isabel Clark</Table.Cell>
                            <Table.Cell className="px-6 py-4">606 Fir Lane</Table.Cell>
                            <Table.Cell className="px-6 py-4">Married</Table.Cell>
                            <Table.Cell className="px-6 py-4">26-35</Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                <Dropdown
                                    label=""
                                    dismissOnClick={true}
                                    renderTrigger={() => (
                                        <Button outline className="border-transparent bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                            <HiDotsVertical />
                                        </Button>
                                    )}>
                                    <Dropdown.Item onClick={toggleFormModalClickHandler}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={toggleDeleteConfirmationClickHandler}>Delete</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <Table.Cell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Jack Thomas</Table.Cell>
                            <Table.Cell className="px-6 py-4">707 Cedar Grove</Table.Cell>
                            <Table.Cell className="px-6 py-4">Divorced</Table.Cell>
                            <Table.Cell className="px-6 py-4">36-45</Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                <Dropdown
                                    label=""
                                    dismissOnClick={true}
                                    renderTrigger={() => (
                                        <Button outline className="border-transparent bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                            <HiDotsVertical />
                                        </Button>
                                    )}>
                                    <Dropdown.Item onClick={toggleFormModalClickHandler}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={toggleDeleteConfirmationClickHandler}>Delete</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>

            <Modal show={showFormModal} onClose={toggleFormModalClickHandler}>
                <Modal.Header>Form</Modal.Header>
                <Modal.Body>
                    <div className="mb-2">
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Name" />
                        </div>
                        <TextInput id="name" type="email" onChange={(event) => {console.log(event.target.value)}} defaultValue={"Raymund Enso"} required />
                    </div>
                    <div className="mb-2">
                        <div className="mb-2 block">
                            <Label htmlFor="address" value="Address" />
                        </div>
                        <Textarea id="address" required rows={4} onChange={(event) => {console.log(event.target.value)}} defaultValue={"My Address"}/>
                    </div>
                    <div className="mb-2">
                        <div className="mb-2 block">
                            <Label htmlFor="civilStatus" value="Civil Status" />
                        </div>
                        <Select id="civilStatus" onChange={(event) => {console.log(event.target.value)}} required>
                            <option value="single">Single</option>
                            <option value="married" selected>Married</option>
                            <option value="divorced">Divorced</option>
                        </Select>
                    </div>
                    <fieldset className="flex flex-col gap-4 mb-2">
                        <div className="mb-2 block">
                            <Label htmlFor="civilStatus" value="Age group" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="18-25" name="ageGroup" value="18-25" onChange={(event) => {console.log(event.target.value)}} />
                            <Label htmlFor="18-25">18-25</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="26-25" name="ageGroup" value="26-35" onChange={(event) => {console.log(event.target.value)}} defaultChecked/>
                            <Label htmlFor="26-25">26-35</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="36-45" name="ageGroup" value="36-45" onChange={(event) => {console.log(event.target.value)}} />
                            <Label htmlFor="36-45">36-45</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="46+" name="ageGroup" value="46+" onChange={(event) => {console.log(event.target.value)}} />
                            <Label htmlFor="46+">46+</Label>
                        </div>
                    </fieldset>
                    <div className="flex max-w-md flex-col gap-4" id="checkbox">
                        <div className="flex items-center gap-2">
                            <Checkbox id="correct" defaultChecked />
                            <Label htmlFor="correct" className="flex">Data is correct</Label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={toggleFormModalClickHandler} color="blue" disabled>Submit</Button>
                    <Button color="gray" onClick={toggleFormModalClickHandler}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDeleteConfirmationModal} size="md" onClose={toggleDeleteConfirmationClickHandler} popup>
                <Modal.Header />
                <Modal.Body>
                <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this record?
                    </h3>
                    <div className="flex justify-center gap-4">
                    <Button color="failure" onClick={toggleDeleteConfirmationClickHandler}>
                        Yes
                    </Button>
                    <Button color="gray" onClick={toggleDeleteConfirmationClickHandler}>
                        No
                    </Button>
                    </div>
                </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default App

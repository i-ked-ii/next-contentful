import { useRouter } from 'next/router'
import Layout from "../../components/Layouts";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function Contact() {
    // console.log('category', posts, category)
    const router = useRouter();


    return (
        <Layout title="Contact us">
            <div className="container py-4">
                <h1 className="mt-5 mb-5">Contact Us</h1>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="text" name="name" id="exampleEmail" placeholder="Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Surname</Label>
                        <Input type="text" name="surname" id="exampleEmail" placeholder="Surname" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Telephone Number</Label>
                        <Input type="number" name="telephone" id="exampleEmail" placeholder="Telephone Numbe" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="E-mail" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Description</Label>
                        <Input type="textarea" name="description" id="exampleText" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
        </FormText>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>

        </Layout>
    );
}
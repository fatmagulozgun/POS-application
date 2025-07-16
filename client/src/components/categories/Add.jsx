import { Button, Form, Input, Modal, message } from "antd";

const Add = ({ isAddModalOpen, setIsAddModalOpen, categories, setCategories }) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/categories/add-category", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            if (res.status === 200) {
                message.success("Kategori başarıyla eklendi.");
                setCategories([...categories, values]);
                setIsAddModalOpen(false);
                form.resetFields();
            }
        } catch (error) {
            message.error("Bir şeyler yanlış gitti.");
            console.log(error);
        }
    };

    return (
        <Modal
            title="Kategori Ekle"
            open={isAddModalOpen}
            onCancel={() => setIsAddModalOpen(false)}
            footer={false}
        >
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                    name="title"
                    label="Kategori Adı"
                    rules={[{ required: true, message: "Kategori adı zorunludur!" }]}
                >
                    <Input placeholder="Kategori adı giriniz" />
                </Form.Item>
                <Form.Item className="flex justify-end mb-0">
                    <Button type="primary" htmlType="submit">
                        Ekle
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default Add;
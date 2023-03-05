import { useStore } from '../../store';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './index.scss';

function Login () {
  const { loginStore } = useStore();

  async function onFinish (values) {
    console.log(values);
    await loginStore.login(values);
  }

  return (
    <div className="login">
      <div className="login-form">
        <div className="login-title">登&nbsp;&nbsp;&nbsp;&nbsp;录</div>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入账号!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              立即登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
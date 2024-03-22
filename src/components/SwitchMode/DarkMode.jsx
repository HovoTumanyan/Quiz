import { Switch, Space, ConfigProvider} from 'antd';
import { FaMoon, FaSun} from 'react-icons/fa';

export default function switchMode({ setSwitchMode }) {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'purple',
          },
          components: {
            Switch: {
              colorPrimary: '#001529',
            },
          },
        }}
      >
        <Space direction="vertical">
          <Switch
            checkedChildren={<FaSun style={{ color: 'yellow', fontSize: '17px' }} />}
            unCheckedChildren={<FaMoon style={{ color: 'yellow', fontSize: '17px' }} />}
            onChange={(checked) => setSwitchMode(checked)}
          />
        </Space>
      </ConfigProvider>
    </>
  );
}

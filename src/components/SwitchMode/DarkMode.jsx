import { Switch, Space, ConfigProvider } from 'antd';
import { FaMoon } from "react-icons/fa";

import { FaSun } from 'react-icons/fa';

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
            colorPrimary: 'black',

              handleBg: 'white',
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

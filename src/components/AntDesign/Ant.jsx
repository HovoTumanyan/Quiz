import { Menu, theme } from 'antd';
import './AntDesign.css';

export default function Ant({ switchMode, handleReset, categories, setGlob, t }) {
  const items = categories.map((category, index) => ({
    key: String(index + 1),
    label: t(`translations.${category}`),

    onClick: () => handleReset(setGlob(category)),
  }));

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Menu
      theme={switchMode ? 'dark' : 'light'}
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={items}
      style={{
        flex: 1,
        minWidth: 0,
        width: '100%',
        padding: '0 24px',
        borderRadius: borderRadiusLG,
        borderBottom: switchMode ? '1px solid purple' : '1px solid #ccc',
      }}
    />
  );
}

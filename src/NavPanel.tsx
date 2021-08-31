import { FC } from 'react';

import style from './styles/NavPanel.module.scss';

type Props = {
  title: string;
  contents: string;
};

const NavPanel: FC<Props> = ({ children }) => (
  <div className={style['navpanel-appear']}>{children}</div>
);

export default NavPanel;

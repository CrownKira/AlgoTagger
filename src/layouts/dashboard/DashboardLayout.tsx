import { useState } from 'react';
// @mui
import { Box } from '@mui/material';
// hooks
import { styled, alpha } from '@mui/material/styles';
import { bgGradient } from 'src/utils/cssStyles';
import Image from 'src/components/image';
import useResponsive from '../../hooks/useResponsive';
// auth
import AuthGuard from '../../auth/AuthGuard';
// components
import { useSettingsContext } from '../../components/settings';
//
import Main from './Main';
import Header from './header';
import NavMini from './nav/NavMini';
import NavVertical from './nav/NavVertical';
import NavHorizontal from './nav/NavHorizontal';
import Footer from './Footer';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  // padding: theme.spacing(10, 0),
}));

const StyledBg = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  position: 'absolute',
  transform: 'scaleX(-1)',
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
}));

export default function DashboardLayout({ children }: Props) {
  const { themeLayout } = useSettingsContext();

  const isDesktop = useResponsive('up', 'lg');

  const [open, setOpen] = useState(false);

  const isNavHorizontal = themeLayout === 'horizontal';

  const isNavMini = themeLayout === 'mini';

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderNavVertical = <NavVertical openNav={open} onCloseNav={handleClose} />;

  const renderContent = () => (
    <StyledRoot>
      <Header onOpenNav={handleOpen} />
      <Main>{children}</Main>
      <Footer />
      <StyledBg />
    </StyledRoot>
  );

  return <> {renderContent()} </>;
}

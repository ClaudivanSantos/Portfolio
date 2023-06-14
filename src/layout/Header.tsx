// @ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  Box,
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router';

export function Header({ menuVisible }: { menuVisible: boolean }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const matches = useMediaQuery('(min-width:700px)');
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          a: { textDecoration: 'none' },
          position: 'fixed',
          top: '0',
          width: '100%',
          zIndex: 1000,
          backgroundColor: 'rgb(15, 15, 25)',
        }}
      >
        <Box
          component="img"
          sx={{
            height: '3rem',
            width: '8rem',
            cursor: 'pointer',
            marginLeft: '1rem',
            marginTop: '2rem',
          }}
          alt="Logo "
          src={logo}
          onClick={() => navigate(`/`)}
        />

        {menuVisible ? (
          <Box sx={{ marginTop: '20px' }}>
            {matches ? (
              <ButtonGroup
                sx={{
                  a: { textDecoration: 'none' },
                  marginRight: '1rem',
                }}
                variant="text"
              >
                <AnchorLink offset="200" href="#home">
                  <Button
                    color="info"
                    sx={{
                      color: '#fff',
                      textDecoration: 'inherit',
                      ':hover': { backgroundColor: '#4c1499' },
                    }}
                  >
                    Início
                  </Button>
                </AnchorLink>

                <AnchorLink offset="100" href="#aboutMe">
                  <Button
                    color="info"
                    sx={{
                      color: '#fff',
                      textDecoration: 'inherit',
                      ':hover': { backgroundColor: '#4c1499' },
                    }}
                  >
                    Sobre mim
                  </Button>
                </AnchorLink>

                <AnchorLink offset="100" href="#doForYou">
                  <Button
                    color="info"
                    sx={{
                      color: '#fff',
                      textDecoration: 'inherit',
                      ':hover': { backgroundColor: '#4c1499' },
                    }}
                  >
                    O que posso fazer por você
                  </Button>
                </AnchorLink>

                <AnchorLink offset="100" href="#ability">
                  <Button
                    color="info"
                    sx={{
                      color: '#fff',
                      textDecoration: 'inherit',
                      ':hover': { backgroundColor: '#4c1499' },
                    }}
                  >
                    Habilidades
                  </Button>
                </AnchorLink>

                <AnchorLink offset="100" href="#project">
                  <Button
                    color="info"
                    sx={{
                      color: '#fff',
                      textDecoration: 'inherit',
                      ':hover': { backgroundColor: '#4c1499' },
                    }}
                  >
                    Projetos
                  </Button>
                </AnchorLink>

                <AnchorLink href="#contact">
                  <Button
                    color="info"
                    sx={{
                      color: '#fff',
                      textDecoration: 'inherit',
                      ':hover': { backgroundColor: '#4c1499' },
                    }}
                  >
                    Contato
                  </Button>
                </AnchorLink>
              </ButtonGroup>
            ) : (
              <>
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  size="small"
                >
                  <AiOutlineMenu size="20" color="#fff" />
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <Box display="flex" flexDirection="column">
                    <AnchorLink offset="200" href="#home">
                      <MenuItem onClick={handleClose}>
                        <Button
                          color="info"
                          sx={{
                            color: '#fff',
                            backgroundColor: '#4c1499',
                            textDecoration: 'inherit',
                            ':hover': { backgroundColor: 'rgb(15, 15, 25)' },
                            width: '100%',
                          }}
                        >
                          Início
                        </Button>
                      </MenuItem>
                    </AnchorLink>

                    <AnchorLink offset="100" href="#aboutMe">
                      <MenuItem onClick={handleClose}>
                        <Button
                          color="info"
                          sx={{
                            color: '#fff',
                            backgroundColor: '#4c1499',
                            textDecoration: 'none',
                            ':hover': { backgroundColor: 'rgb(15, 15, 25)' },
                            width: '100%',
                          }}
                        >
                          Sobre mim
                        </Button>
                      </MenuItem>
                    </AnchorLink>

                    <AnchorLink offset="100" href="#doForYou">
                      <MenuItem onClick={handleClose}>
                        <Button
                          color="info"
                          sx={{
                            color: '#fff',
                            backgroundColor: '#4c1499',
                            textDecoration: 'inherit',
                            ':hover': { backgroundColor: 'rgb(15, 15, 25)' },
                            width: '100%',
                          }}
                        >
                          O que posso fazer por você
                        </Button>
                      </MenuItem>
                    </AnchorLink>

                    <AnchorLink offset="100" href="#ability">
                      <MenuItem onClick={handleClose}>
                        <Button
                          color="info"
                          sx={{
                            color: '#fff',
                            backgroundColor: '#4c1499',
                            textDecoration: 'inherit',
                            ':hover': { backgroundColor: 'rgb(15, 15, 25)' },
                            width: '100%',
                          }}
                        >
                          Habilidades
                        </Button>
                      </MenuItem>
                    </AnchorLink>

                    <AnchorLink offset="100" href="#project">
                      <MenuItem onClick={handleClose}>
                        <Button
                          color="info"
                          sx={{
                            color: '#fff',
                            backgroundColor: '#4c1499',
                            textDecoration: 'inherit',
                            ':hover': { backgroundColor: 'rgb(15, 15, 25)' },
                            width: '100%',
                          }}
                        >
                          Projetos
                        </Button>
                      </MenuItem>
                    </AnchorLink>

                    <AnchorLink offset="500" href="#contact">
                      <MenuItem onClick={handleClose}>
                        <Button
                          color="info"
                          sx={{
                            color: '#fff',
                            backgroundColor: '#4c1499',
                            textDecoration: 'inherit',
                            ':hover': { backgroundColor: 'rgb(15, 15, 25)' },
                            width: '100%',
                          }}
                        >
                          Contato
                        </Button>
                      </MenuItem>
                    </AnchorLink>
                  </Box>
                </Menu>
              </>
            )}
          </Box>
        ) : (
          ''
        )}
      </Box>
    </>
  );
}

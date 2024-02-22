import React from "react"
import * as Yup from 'yup';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material"
import imagemProgramacao from '../../assets/img/programacao.jpeg'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useFormik } from "formik";
import ReactInputMask from "react-input-mask";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ICardsProps {
  icone: React.ReactElement,
  title: string,
  informations: string,
}

interface IRegisterProps {
  nome: string,
  sobrenome: string,
  email: string,
  telefone_celular: string,
  horario: string,
}

const cardsInformations: ICardsProps[] = [
  {
    icone: <AccessTimeIcon />,
    title: 'Aulas ao Vivo',
    informations: 'Aula semanal ao vivo com interação, às quartas-feiras, das 14h às 18h ou das 19h às 23h (horário de Brasília – UTC -3).',
  },
  {
    icone: <CalendarTodayIcon />,
    title: 'Carga Horária e Duração do Curso',
    informations: '360 horas/aula + 40 horas/aula de trabalho de conclusão de curso (TCC). Duração total: 18 meses* + apresentação do TCC.',
  },
  {
    icone: <AnalyticsOutlinedIcon />,
    title: 'Frequência',
    informations: 'A frequência dos alunos é contabilizada pela realização das provas e deve ser igual ou superior a 75%.',
  },
]

const AccordionInformations: ICardsProps[] = [
  {
    icone: <ExpandMoreIcon />,
    title: '1. Currículo Abragente',
    informations: 'Nosso programa foi projetado para cobrir todos os aspectos essenciais da Engenharia da Computação, desde os fundamentos teóricos até as últimas tendências e tecnologias.'
  },
  {
    icone: <ExpandMoreIcon />,
    title: '2. Professores Especializados',
    informations: 'Aprenda com os melhores! Nossos professores são especialistas em suas áreas, prontos para guiá-lo em sua jornada rumo ao sucesso.'
  },
  {
    icone: <ExpandMoreIcon />,
    title: '3. Oportunidade de Carreira',
    informations: 'A demanda por engenheiros da computação está em alta! Abra portas para oportunidades de carreira em empresas de tecnologia de ponta, startups inovadoras e muito mais.'
  },
]

const Page = () => {
  const telefoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;

  const initialValues: IRegisterProps = {
    nome: '',
    sobrenome: '',
    email: '',
    telefone_celular: '',
    horario: '',
  }

  const validationFeedback = Yup.object({
    nome: Yup.string().required(),
    sobrenome: Yup.string().required(),
    email: Yup.string().email().required(),
    telefone_celular: Yup.string().matches(telefoneRegex).required(),
    horario: Yup.string().required(),
  });

  const onSubmit = (body: IRegisterProps) => {
    toast.success(`${body.nome} sua inscrição foi realizada com sucesso`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }


  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validationFeedback,
    enableReinitialize: true,
  });

  return (
    <Box mb={'16px'}>
      <ToastContainer />
      <Box
        component={'div'}
        display={'flex'}
        sx={{
          maxHeight: { md: '500px' },
          height: { xl: 'auto' },
          position: 'relative',
        }}
      >
        <img
          src={imagemProgramacao}
          alt="imagem_programador"
          width={'100%'}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 88%)'
          }}
        />
        <Box component={'span'} position={'absolute'} color={'white'} sx={{
          top: { md: 370, xs: 190 },
          bottom: { md: 0, xs: 0 },
          left: { md: 115, xs: 5 },
          right: { md: 0, xs: 0 },
          fontSize: { md: '48px', xs: '18px' },
          textTransform: 'uppercase',
          fontWeight: 'bold'
        }}>
          Engenharia da Computação
        </Box>
      </Box>
      <Box component={'div'} display={'flex'}>
        <Grid container spacing={2}>
          <Grid item md={8} sm={12}>
            <Box component={'div'} display={'flex'} justifyContent={'center'} m={'8px 0px'}>
              <Typography variant="h4" sx={{ fontSize: { xs: '24px', md: '32px' } }}>
                Sobre o curso
              </Typography>
            </Box>
            <Grid container>
              {cardsInformations.map((item, index) => (
                <Grid item md={4} sm={12}>
                  <Card
                    sx={{
                      minWidth: '245px',
                      backgroundColor: '#F7F9FF',
                      margin: { xs: '16px 16px', md: '0px 16px' },
                      height: { md: '100%' }
                    }}
                    key={index}
                  >
                    <CardContent>
                      <Box component={'div'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'8px'}>
                        <Box component={'div'} display={'flex'}>{item.icone}</Box>
                        <Box component={'span'} display={'flex'} flexWrap={'nowrap'} fontWeight={'bold'} textTransform={'uppercase'}>{item.title}</Box>
                        <Box component={'span'} display={'flex'} flexWrap={'nowrap'}>{item.informations}</Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box component={'div'} display={'flex'} alignItems={'center'} flexDirection={'column'} border={'1px solid #CCCCCC'} borderRadius={4} m={'16px 16px'}>
              <Typography variant="inherit" lineHeight={1.5} padding={'16px 16px'}>
                Você ama desafios? Sonha em criar tecnologia que muda o mundo? Então dê o primeiro passo para uma carreira emocionante com o Curso de Engenharia da Computação!
                Por que escolher Engenharia da Computação conosco?
              </Typography>
              {AccordionInformations.map((item, index) => (
                <Accordion key={index + 1} sx={{ width: '100%' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                  >
                    {item.title}
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.informations}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
          <Grid item md={4} sm={12} display={'flex'} alignItems={'center'}>
            <Container>
              <Typography variant="h4" display={'flex'} justifyContent={'center'} sx={{ fontSize: { xs: '24px', md: '32px' } }}>Formulário de Inscrição</Typography>
              <Box component={'div'} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      autoComplete="given-name"
                      name="nome"
                      fullWidth
                      id="nome"
                      label="Nome *"
                      autoFocus
                      value={formik.values.nome}
                      onChange={formik.handleChange}
                      error={Boolean(formik.errors.nome)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      fullWidth
                      id="sobrenome"
                      label="Sobrenome *"
                      name="sobrenome"
                      autoComplete="family-name"
                      value={formik.values.sobrenome}
                      onChange={formik.handleChange}
                      error={Boolean(formik.errors.sobrenome)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      type="email"
                      fullWidth
                      id="email"
                      label="Email *"
                      name="email"
                      autoComplete="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={Boolean(formik.errors.email)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      fullWidth
                      name="telefone_celular"
                      label="Telefone Celular *"
                      id="telefone_celular"
                      autoComplete="cellphone"
                      value={formik.values.telefone_celular}
                      onChange={formik.handleChange}
                      InputProps={{
                        inputComponent: ReactInputMask as any,
                        inputProps: {
                          mask: "(99)99999-9999",
                          maskChar: " ",
                        },
                      }}
                      error={Boolean(formik.errors.telefone_celular)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <FormControl fullWidth>
                      <InputLabel id="-label">Horário *</InputLabel>
                      <Select
                        fullWidth
                        labelId="-label"
                        id="horario"
                        name="horario"
                        label="Horário *"
                        value={formik.values.horario}
                        onChange={formik.handleChange}
                        error={Boolean(formik.errors.horario)}
                      >
                        <MenuItem value={'14as16'}>Das 14h às 18h</MenuItem>
                        <MenuItem value={'19as23'}>Das 19h às 23h</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  onClick={() => formik.handleSubmit()}
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    background: '#6813D2',
                    borderRadius: '4px'
                  }}
                >
                  Enviar
                </Button>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}


export default Page
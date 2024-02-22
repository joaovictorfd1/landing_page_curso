import { Box } from "@mui/material"

const Footer = () => {
  return (
    <Box component={'footer'} sx={{
      minHeight: '60px',
      backgroundColor: '#6813D2',
      alignItems: 'center',
      marginTop: 'auto',
    }} display={'flex'}>
      <Box component={'div'} display={'flex'} justifyContent={'center'} width={'100%'}>
        <Box component={'span'} sx={{
          color: 'white'
        }}>
          Delmoni Cursos @ Todos os direitos reservados. 2024
        </Box>
      </Box>
    </Box>
  )
}


export default Footer
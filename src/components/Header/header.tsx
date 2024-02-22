import { Box } from '@mui/material'

const Header = () => {
  return (
    <Box component={'header'} sx={{
      minHeight: '60px',
      backgroundColor: '#6813D2',
      alignItems: 'center'
    }} display={'flex'}>
      <Box component={'div'} display={'flex'} justifyContent={'center'} width={'100%'}>
        <Box component={'span'} sx={{
          color: 'white'
        }}>
          Delmoni Cursos
        </Box>
      </Box>
    </Box>
  )
}


export default Header
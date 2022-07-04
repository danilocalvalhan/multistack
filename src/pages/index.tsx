import type { NextPage } from 'next';
import ListGenerator from '../ui/components/list/list';
import TitleGenerator  from '../ui/components/title/title';
import { Dialog, DialogActions, TextField, Grid, Button, Snackbar } from '@mui/material';
import { UseIndex } from '../data/hooks/pages/useIndex';


const Home: NextPage = () => {
  const {
    listaPets, 
    petSelecionado, 
    setPetSelecionado, 
    email,
    setEmail,
    valor,
    setValor,
    mensagem, 
    setMensagem,
    Adotar} = UseIndex();
  return (
    <div> 
      <TitleGenerator 
        firstTitle = '' 
        secondTitle={
        <span>
          Com um pequeno valor mensal, você <br/>
          pode <strong>adotar um pet virtualmente</strong>
        </span>
      }/>

      <ListGenerator
      pet={listaPets}
      onSelection={(bichinho) => setPetSelecionado(bichinho)}
      />

      < Dialog open={petSelecionado !== null} fullWidth PaperProps={{ sx: { padding: 5} }} onClose={() => setPetSelecionado(null)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth type='email' label={'E-mail'} value={email} onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth type='number' label={'Quantia por mês'} value={valor} onChange={(v) => setValor(v.target.value)}/>
          </Grid>
          <Grid item xs={12}>
            <DialogActions>
              <Button color='secondary' onClick={() => setPetSelecionado(null)}>Cancelar</Button>
              <Button variant='contained' onClick={() => Adotar()}>Confirmar adoção</Button>
            </DialogActions>
          </Grid>
        </Grid>        
      </Dialog>

      <Snackbar open={mensagem.length > 0} message={mensagem} autoHideDuration={2500} onClose={() => setMensagem('')}/>
    </div>
  )
}

export default Home

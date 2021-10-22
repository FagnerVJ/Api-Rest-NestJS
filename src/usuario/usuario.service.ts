import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()//função Injectable do nestjs/common o UsuarioService passou a ser injetável 
export class UsuarioService{//A função foi transformada em um provide
    private usuarios: Array<Usuario> = [{
        id: 1,
        email: 'fagnerviana@gmail.com.br',
        senha: '123456',
        nomeCompleto: 'Fagner Viana',
        dataDeEntrada: new Date,
        nomeDeUsuario: 'fagner'
    }];
    

    

    public cria(usuario: Usuario): Usuario{
        this.usuarios.push(usuario);
        
        return usuario;
    }
       public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
            return this.usuarios.find(usuario => usuario.nomeDeUsuario == nomeDeUsuario);
            }
}


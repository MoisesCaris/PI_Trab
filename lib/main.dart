import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() => runApp(HealthCare());

class HealthCare extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/login',
      routes: {
        '/login': (context) => LoginPage(),
      },
    );
  }
}

class LoginPage extends StatefulWidget {
  @override
  LoginPageState createState() => LoginPageState();
}

class Paciente extends StatefulWidget {
  // colocar as váriaveis que vem do banco de dados aqui
  // final tipoDeDado nomeDaVariavel;
  // passar para o construtor como required

  @override
  PacienteState createState() => PacienteState();
}

// entender essa parte para implementar
class LoginPageState extends State<LoginPage> {
  final TextEditingController pacienteController = TextEditingController();
  late String notification = "";
  late String nomePaciente;
  late int pressao;
  late String horario;
  late Null receita;
  late String observacao;
  late String horarios;

  void _sendData() async {
    final String apiUrl =
        'http://192.168.3.48:3000/user/paciente'; // Substitua pela sua URL de destino

    var data = {
      'paciente': pacienteController.text,
    };

    var response = await http.post(
      Uri.parse(apiUrl),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(data),
    );

    if (response.statusCode == 200) {
      print('Conexão realizada! Resposta: ${response.body}');

      var jsonRes = jsonDecode(response.body);
      print(jsonRes['success']);
      if (jsonRes['success'] == true) {
        if (jsonRes['user'] != null) {
          var paciente = jsonRes['user'];
          // variáveis do banco de dados, que esta na classe Paciente
          // nomePaciente = paciente['nome']; (nesse formato)
        }

        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => Paciente(
                // variáveis do banco de dados, que esta na classe Paciente
                ),
          ),
        );
      } else {
        setState(() {
          notification = "Paciente não encontrado";
        });
      }
    } else {
      // Lógica para manipular a resposta de erro aqui
      print('Conexão mal-sucedida! Erro: ${response.statusCode}');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Login Paciente')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: pacienteController,
              decoration: InputDecoration(
                hintText: 'Nome do Paciente',
                filled: true,
                fillColor: Colors.blue[50],
                prefixIcon: Icon(Icons.person),
                border: OutlineInputBorder(
                  // Bordas do campo
                  borderRadius: BorderRadius.circular(5.0),
                  // Arredondamento das bordas
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
            ),
            ElevatedButton(
              onPressed: _sendData,
              child: Text('Pesquisar'),
            ),
            Text(
              notification,
              style: TextStyle(
                fontSize: 24.0,
                fontWeight: FontWeight.bold,
                color: Color.fromARGB(255, 255, 0, 0),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class PacienteState extends State<Paciente> {
  // variáveis do banco de dados Paciente

  void initState() {
    super.initState();
    // função para pegar os dados do banco de dados com as variáveis do Paciente
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Paciente")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // colocar os dados do paciente aqui
            // Text (dados paciente)
          ],
        ),
      ),
    );
  }
}

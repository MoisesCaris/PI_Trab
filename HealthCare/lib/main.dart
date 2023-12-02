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
  final String cpf_paciente;

  Paciente({
    required this.cpf_paciente,
  });

  @override
  PacienteState createState() => PacienteState();
}

// entender essa parte para implementar
class LoginPageState extends State<LoginPage> {
  final TextEditingController pacienteController = TextEditingController();
  late String cpf_paciente;
  late String nomePaciente;
  late String notification = "";

  void _sendData() async {
    final String apiUrl =
        'http://192.192.4.90:3300/user/paciente'; // Substitua pela sua URL de destino

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
              cpf: cpf_paciente,
            ),
          ),
        );
      } else {
        setState(() {
          notification = "Paciente não encontrado";
        });
      }
    } else {
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
                color: Color.fromARGB(255, 255, 238, 0),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class PacienteState extends State<Paciente> {
  late String cpf;

  void initState() {
    super.initState();
    cpf = widget.cpf_paciente;
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
            Text("CPF: $cpf"),
          ],
        ),
      ),
    );
  }
}

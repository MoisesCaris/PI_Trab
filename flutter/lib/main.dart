import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Login Form'),
        ),
        body: LoginForm(),
      ),
    );
  }
}

class LoginForm extends StatefulWidget {
  @override
  _LoginFormState createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final TextEditingController _cpfController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text('CPF'),
          TextFormField(
            controller: _cpfController,
            decoration: InputDecoration(
              hintText: 'Digite seu CPF',
              prefixIcon: Icon(Icons.person),
              filled: true,
              fillColor: Colors.lightBlue[50],
            ),
            keyboardType: TextInputType.number,
            inputFormatters: [FilteringTextInputFormatter.digitsOnly],
          ),
          SizedBox(height: 16),
          Text('Senha'),
          TextFormField(
            controller: _passwordController,
            decoration: InputDecoration(
              hintText: 'Digite sua senha',
              prefixIcon: Icon(Icons.lock),
              filled: true,
              fillColor: Colors.lightBlue[50],
            ),
            obscureText: true,
          ),
          SizedBox(height: 24),
          ElevatedButton(
            onPressed: () {
              // Logic to handle login
            },
            child: Text('Entrar'),
          ),
        ],
      ),
    );
  }
}

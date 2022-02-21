import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Moeda from "./Moeda";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [adicionado, setAdicionado] = useState();
  const [favoritado, setFavoritado] = useState();
  const listaProdutos = [
    {
      produtoId: 1,
      produtoFavoritado: false,
      produtoAdicionado: false,
      descricao: "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      produtoValor: 2599,
      produtoImagem: "produto.png"
    },
    {
      produtoId: 2,
      produtoFavoritado: false,
      produtoAdicionado: false,
      descricao: "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      produtoValor: 2599,
      produtoImagem: "produto.png"
    },
  ];

  useEffect(() => {
    async function getProduto() {
      setProdutos(listaProdutos);
    }
    getProduto();
  }, []);

  // Adicionando o produto
  function adicionarProduto(e) {
    const buttonId = e.target.getAttribute("idButton");

    produtos.forEach((produto) => {
      if (produto.produtoId == buttonId) {
        produto.produtoAdicionado = !produto.produtoAdicionado;
      }
    });

    setAdicionado(!adicionado);
  }

  // Favoritando o produto
  async function setarFavoritado(e) {
    const buttonId = e.target.getAttribute("idButton");

    produtos.forEach((produto) => {
      if (produto.produtoId == buttonId) {
        produto.produtoFavoritado = !produto.produtoFavoritado;
      }
    });

    setFavoritado(!favoritado);
  }

  return (
    <div className="App container">
      {produtos.map((produto) => (
        <Card style={{ width: "22rem" }}>
          {produto.produtoFavoritado ? (
            <Card.Img
              onClick={setarFavoritado}
              className="favorite"
              favoritado={produto.produtoFavoritado}
              idButton={produto.produtoId}
              variant="top"
              src="./favoriteSelect.png"
            />
          ) : (
            <Card.Img
              onClick={setarFavoritado}
              className="favorite"
              idButton={produto.produtoId}
              favoritado={produto.produtoFavoritado}
              variant="top"
              src="./favorite.png"
            />
          )}
          <Card.Img variant="top" src={produto.produtoImagem} />
          <Card.Body>
            <Card.Text>{produto.descricao}</Card.Text>

            <Card.Subtitle className="mb-2 line text-muted"> <Moeda>{produto.produtoValor + 200}</Moeda> </Card.Subtitle>

            <Card.Title> <Moeda>{produto.produtoValor}</Moeda> </Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              em até <span className="text-black"> 10x de <Moeda>{produto.produtoValor/10}</Moeda> </span> sem juros
            </Card.Subtitle>

            <div className="center">
              {produto.produtoAdicionado ? (
                <Button onClick={adicionarProduto} selecionado={produto.produtoAdicionado} idButton={produto.produtoId} variant="success">
                  ADICIONADO
                </Button>
              ) : (
                <Button onClick={adicionarProduto} selecionado={produto.produtoAdicionado} idButton={produto.produtoId} variant="success">
                  ADICIONAR
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;

import React from "react";
import { NavLink } from "react-router-dom";
import { faBriefcase, faHome, faKey, faBuilding, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Form, Button, Container, Row, Col, Table} from "react-bootstrap"
import "./Tabela.css"
 


function Tabela({colunas, registros, colunaStatus}){
    return(
            <Container fluid className="p-0">

                <Row>
                    <Col className="m-0 p-0">
                        <div className="tabela">
                            <Table striped bordered hover size="md">
                                <thead>
                                    <tr>
                                        <th className="colunaStatus"></th>
                                        {colunas.map((coluna) => {
                                            return(
                                                <th style={{width: coluna.proporcao + "%"}}>{coluna.nome}</th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                {registros.map((registro) => {
                                    
                                            return(
                                                <tr>
                                                    <td>
                                                        <div className="bordaStatus"></div>
                                                    </td>
                                                    {
                                                        registro.map((dado) => {
                                                            
                                                            return(
                                                                <td>{dado}</td>
                                                            )
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })}
                                </tbody>
                                <tfoot>
                                    
                                </tfoot>
                            
                            </Table>
                        </div>

                    </Col>
                </Row>

            </Container>
        
        
    )
}

export default Tabela;
#include "DuMessengerServer.h"
#include "DuMessengerSocket.h"
#include <QTextStream>
#include<QtDebug>

namespace DuarteCorporation {

DuMessengerServer::DuMessengerServer(QObject *parent)
    :QTcpServer(parent)
{
}

bool DuMessengerServer::startServer(quint16 port)
{
    listen(QHostAddress::Any,port);
}

void DuMessengerServer::incomingConnection(qintptr handle)
{
    qDebug()<<"Client connected with handle:"<< handle;
    auto socket = new DuMessengerSocket(handle,this);
    mSockets << socket;

    for(auto i : mSockets){
        QTextStream T(i);
        T<< "Server: Polaczyl sie:"<<handle;
        i->flush();
    }

    connect(socket, &DuMessengerSocket::DuReadyRead,[&](DuMessengerSocket *S)
    {
        qDebug()<< "DuReadyRead";
        QTextStream T(S);
        auto text = T.readAll();

        for(auto i : mSockets){
            QTextStream K(i);
            K<<text;
            i->flush();
        }
    });

    connect(socket, &DuMessengerSocket::DuStateChanged,
            [&](DuMessengerSocket *S, int ST) {
        qDebug()<<"DuStateChanged with handle:"
                << S->socketDescriptor();
        if(ST==QTcpSocket::UnconnectedState) {
            qDebug()<<"Unconnected state with handle:"
                    <<S->socketDescriptor();
            mSockets.removeOne(S);
            for(auto i : mSockets){
                QTextStream K(i);
                K <<"Server: Client"
                  << S->socketDescriptor()
                  << "Odlaczyl sie...";
                i->flush();
            }
        }
    });
 }
} // end namespace DuarteCorporation

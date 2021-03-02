#include <QCoreApplication>
#include <DuMessengerServer.h>

using namespace DuarteCorporation;
int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);
    DuMessengerServer Server;
    Server.startServer(3333);
    if(!Server.startServer(3333)){
        qDebug() << "Error:"<< Server.errorString();
        return 1;
    }
    qDebug()<< "Server started...";
    return a.exec();
}

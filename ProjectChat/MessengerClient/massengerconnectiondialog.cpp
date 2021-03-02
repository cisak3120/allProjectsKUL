#include "massengerconnectiondialog.h"
#include "ui_MassengerConnectionDialog.h"

namespace DuarteCorporation
{
MassengerConnectionDialog::MassengerConnectionDialog(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::MassengerConnectionDialog)
{
    ui->setupUi(this);
}

MassengerConnectionDialog::~MassengerConnectionDialog()
{
    delete ui;
}

void MassengerConnectionDialog::on_ok_clicked()
{
    mHostname = ui->hostname->text();
    mPort = ui->port->value();
    accept();
}

void MassengerConnectionDialog::on_cancel_clicked()
{
    reject();
}
}// end namespace DuarteCorporation

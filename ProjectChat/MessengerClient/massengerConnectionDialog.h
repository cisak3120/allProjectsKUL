#ifndef MASSENGERCONNECTIONDIALOG_H
#define MASSENGERCONNECTIONDIALOG_H

#include <QDialog>

namespace Ui {
class MassengerConnectionDialog;
}
namespace DuarteCorporation {
class MassengerConnectionDialog : public QDialog
{
    Q_OBJECT

public:
    explicit MassengerConnectionDialog(QWidget *parent = nullptr);
    ~MassengerConnectionDialog();
    QString hostname() const;
    quint16 port() const;

private slots:
    void on_ok_clicked();
    void on_cancel_clicked();
private:
    Ui::MassengerConnectionDialog *ui;
    QString mHostname;
    quint16 mPort;
};

inline QString MassengerConnectionDialog::hostname() const
{
    return mHostname;
}

inline quint16 MassengerConnectionDialog::port() const
{
    return mPort;
}
}// end namespace DuarteCorporation

#endif // MASSENGERCONNECTIONDIALOG_H

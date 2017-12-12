apt-get -y update
apt-get install -y apache2
apt-get install -y git

cp -r /vagrant/sitio1/ /var/www/html/
cp -r /vagrant/sitio2/ /var/www/html/

a2ensite sitio1.conf
a2ensite sitio2.conf
a2dissite 000-default.conf
service apache2 reload
a2enmod vhost_alias
service apache2 restart

'use strict';

/**
 * Classe qui gère la connexion avec l'API de connexion et propose les fonctions associées.
 * @constructor : récupère les données (objet) et les stocke dans sa propriété APIInfos.
 */
class DaoWookiesClass {
    constructor() {
        const _thisDaoWookieClass = this;
        this.APIInfos = {};
        this.getAPIInfosWithAjax(_thisDaoWookieClass);
    }
    /**
     * Fait une requête AJAX pour récupérer les données en JSON de l'API de connexion.
     * @param {Object} _thisDaoWookieClass : la classe elle-même.
     */
    getAPIInfosWithAjax(_thisDaoWookieClass) {
        $(document).ready(function () {
            $.ajax({
                url: 'http://ns3055994.ip-193-70-8.eu/selfie-a-wookie-api/Api/session',
                dataType: 'json', // parses JSON
                success: function (result) {
                    _thisDaoWookieClass.APIInfos = result;
                },
                error: function (error) {
                    console.log("Problème lors de la requête ajax.", error);
                }
            })
        })
    }
    /**
     * Vérifie si l'API renvoie un statut OK et un succès.
     */
    isResponseOk() {
        console.log(this.APIInfos);
        if(this.APIInfos.status.toString() === "OK" && this.APIInfos.isSuccess) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Vérifie si le surnom et le mot de passe entrés correspondent à ceux de l'API de connexion.
     * Possible TODO: améliorer la fonction avec une boucle si le nombre d'utilisateurs de l'API augmente.
     * @param {String} surname 
     * @param {Int} password 
     */
    isAuthentificationOK(surname, password) {
        if (this.APIInfos.item.surname.toString() === surname.toString() && parseInt(this.APIInfos.item.size) === parseInt(password)) {
            return true;
        } else {
            return false;
        }
    }
}

/*************** PROGRAM ***************/

/**
 * Pour instanciation de la classe dès chargemment du JS.
 */
const dao = new DaoWookiesClass();
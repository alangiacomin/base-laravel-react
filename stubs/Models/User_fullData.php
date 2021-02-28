
    /**
     * Restituisce tutte le informazioni utente compresi ruoli e permessi
     *
     * @var array
     */
    function fullData()
    {
        $this->role_list = $this->roles_all()
            ->pluck('name')->toArray();

        $this->permission_list = $this->roles_all()
            ->pluck('permissions')->flatten()
            ->pluck('key')->toArray();

        return $this;
    }

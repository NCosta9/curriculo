export default function Tools() {
    return (
        <>
            <div class="" id="icon-grid">
                    <ul class="nav justify-content-center pb-3 mb-3 text-geral">
                        {[
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/tools/photoshop',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/tools/illustrator',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/tools/premiere',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/tools/coreldraw',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/tools/excel',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/tools/word',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/tools/powerpoint',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/tools/sharepoint',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/tools/linux',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/tools/windows7',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/tools/windows10',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/tools/windows11',











                        ].map((descktop) => (
                            <li class="nav-item">
                                <img className="m-2 rounded-5 img-tools" src={descktop.toLowerCase()} height={50}
                                />

                            </li>
                        ))}
                    </ul>

            </div>
        </>
    )
}